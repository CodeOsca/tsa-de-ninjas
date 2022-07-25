import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { tshirts2 } from '../../../constants/tshirts.constant';

@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: [
    './tshirts.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class TshirtsComponent {
  hiddenutton:boolean = true
  tsShirts: Card[] = []

  constructor(
    private mainService: MainService,
    private metaDataService: MetaDataService
    ) {
      this.mainService.scrollZero()
      this.toggleButton()
    }

  ngOnInit(): void {
    let t: string = `Camisetas ${this.getName}`
    this.metaDataService.generateTags({
      title: t,
      description: `Llevar una prenda única significa tener que destacar entre los demás y que mejor forma de hacerlo con una camiseta ${this.getName}, demuestra que tienes el mejor look de tu zona`,
      slug: `${this.mainService.nameSite}/ropa/camisetas`,
      image: 'https://m.media-amazon.com/images/I/61t2y+uAo4L._AC_UL320_.jpg'
    })
  }

  get getName():string{
    return this.mainService.giveName()
  }

  incrementsProducts():void{
    this.tsShirts = tshirts2
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton():void{
    this.incrementsProducts()
    this.toggleButton()
  }
}