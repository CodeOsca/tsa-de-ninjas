import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
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
  hiddenutton:boolean = false
  sweatShirts: Card[] = []

  constructor( private metaDataService: MetaDataService) {}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: 'Sudaderas de ninjas',
      description: `Vendemos las mejores sudaderas de ninjas que puedes encontrar en todo del mercado para sudaderas`,
      slug: `${this.metaDataService.nameSite}/ropa/sudaderas`,
      image: 'https://m.media-amazon.com/images/I/61nT9pjqRqL._AC_UL320_.jpg'
    })
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