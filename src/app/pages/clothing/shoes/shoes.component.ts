import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { ShoesService } from '../../shared/services/shoes.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: [
    './shoes.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class ShoesComponent {
  shoes: Card[] = []

  constructor(
    private mainService: MainService,
    private metaDataService: MetaDataService,
    private shoesSevice: ShoesService
  ) {
    this.setProducts()
    this.mainService.scrollZero()
  }

  ngOnInit(): void {
    let t: string = `Zapatos ${this.getName}`
    this.metaDataService.generateTags({
      title: t,
      description: `El mejor calzado ${this.getName.replace('s', '')} que puedes encontrar a la mejor calidad y buen precio`,
      slug: `${this.mainService.nameSite}/ropa/zapatos`,
      image: 'https://m.media-amazon.com/images/I/51rpjpFhK7S._AC_UL320_.jpg'
    })
  }

  get getName() {
    return this.mainService.giveName()
  }

  setProducts(){
    this.shoes = this.shoesSevice.shoes
  }
}