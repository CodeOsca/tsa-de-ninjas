import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { SweeatsHirtsService } from '../../shared/services/sweeatshirts.service';

@Component({
  selector: 'app-sweatshirts',
  templateUrl: './sweatshirts.component.html',
  styleUrls: [
    './sweatshirts.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class SweatshirtsComponent {
  hiddenutton:boolean = true
  sweatShirts: Card[] = []

  constructor(
    private mainService: MainService,
    private metaDataService: MetaDataService,
    private title: Title,
    private sweeatsHirtsService: SweeatsHirtsService
  ) {
    this.mainService.scrollZero()
    this.setProducts()
    this.toggleButton()
  }

  ngOnInit(): void {
    let t: string = `Sudaderas ${this.getName}`
    this.title.setTitle(t)
    this.metaDataService.generateTags({
      title: t,
      description: `Hoy te traemos las mejores sudaderas ${this.getName} que puedes encontrar en todo del mercado para ${this.getName.slice(3)}`,
      slug: location.href,
      image: 'https://m.media-amazon.com/images/I/61nT9pjqRqL._AC_UL320_.jpg'
    })
  }

  get getName() {
    return this.mainService.giveName()
  }

  setProducts(){
    this.sweatShirts = this.sweeatsHirtsService.sweeatsHirts
  }

  incrementsProducts(){
    this.sweatShirts = this.sweatShirts.concat(this.sweeatsHirtsService.sweeatsHirts2)
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton(){
    this.incrementsProducts()
    this.toggleButton()
  }
}