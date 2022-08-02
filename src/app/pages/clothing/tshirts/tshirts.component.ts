import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
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
  hiddenutton:boolean = false
  tsShirts: Card[] = []

  constructor( private metaDataService: MetaDataService ) {}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: 'Camisetas de ninjas',
      description: `Destaca entre los demás con una fabulosa camiseta ninja`,
      slug: `${this.metaDataService.nameSite}/ropa/camisetas`,
      image: 'https://m.media-amazon.com/images/I/61t2y+uAo4L._AC_UL320_.jpg'
    })
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