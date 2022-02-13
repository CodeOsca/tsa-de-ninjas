import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { TshirtService } from '../../shared/services/tshirts.service';


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
    private metaDataService: MetaDataService,
    private tshirtService:TshirtService
    ) {
      this.mainService.scrollZero()
      this.setProducts()
      this.toggleButton()
    }

  ngOnInit(): void {
    let t: string = `Camisetas ${this.getName}`
    this.metaDataService.generateTags({
      title: t,
      description: `Llevar una prenda única significa tener que destacar entre los demás y que mejor forma de hacerlo con una camiseta ${this.getName}, demuestra que tienes el mejor look de tu zona`,
      slug: `${this.mainService.nameSite}/ropa/camisetas`,
      image: this.tsShirts[0].imgUrl
    })
  }

  get getName():string{
    return this.mainService.giveName()
  }

  setProducts():void{
    this.tsShirts = this.tshirtService.tshirts
  }

  incrementsProducts():void{
    this.tsShirts = this.tsShirts.concat(this.tshirtService.tshirts2)
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton():void{
    this.incrementsProducts()
    this.toggleButton()
  }
}
