import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { sweeatsHirts2 } from '../../../constants/sweeatshirts.constant';

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
    private metaDataService: MetaDataService
  ) {
    this.mainService.scrollZero()
    this.toggleButton()
  }

  ngOnInit(): void {
    let t: string = `Sudaderas ${this.getName}`
    this.metaDataService.generateTags({
      title: t,
      description: `Hoy te traemos las mejores sudaderas ${this.getName} que puedes encontrar en todo del mercado para ${this.getName.slice(3)}`,
      slug: `${this.mainService.nameSite}/ropa/sudaderas`,
      image: 'https://m.media-amazon.com/images/I/61nT9pjqRqL._AC_UL320_.jpg'
    })
  }

  get getName():string{
    return this.mainService.giveName()
  }

  get nameSite(){
    return this.mainService.nameSite
  }

  incrementsProducts():void{
    this.sweatShirts = this.sweatShirts.concat(sweeatsHirts2)
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton():void{
    this.incrementsProducts()
    this.toggleButton()
  }
}