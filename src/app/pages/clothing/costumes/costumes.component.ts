import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { costumes, costumes2 } from '../../../constants/costumes.constant';

@Component({
  selector: 'app-custumes',
  templateUrl: './costumes.component.html',
  styleUrls: [
    './costumes.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class CostumesComponent implements OnInit {
  hiddenutton:boolean = true
  costumes: Card[] = []

  constructor(
    private mainService: MainService,
    private metaDataService: MetaDataService
  ) {
    this.mainService.scrollZero()
    this.setProducts()
    this.toggleButton()
  }

  ngOnInit(): void {
    let t: string = `Disfraces ${this.getName}`
    this.metaDataService.generateTags({
      title: t,
      description: `Excelentes disfraces ${this.getName}, nadie sabrá si eres real o una copia, tenemos buenos precios y una calidad increíble`,
      slug: `${this.mainService.nameSite}/ropa/disfraces`,
      image: 'https://m.media-amazon.com/images/I/71FUYP95kCL._AC_UL320_.jpg'
    })
  }

  get getName():string {
    return this.mainService.giveName()
  }

  setProducts():void{
    this.costumes = costumes
  }

  incrementsProducts():void{
    this.costumes = this.costumes.concat(costumes2)
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton():void{
    this.incrementsProducts()
    this.toggleButton()
  }
}