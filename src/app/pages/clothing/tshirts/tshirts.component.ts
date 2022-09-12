import { Component } from '@angular/core';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['../../shared/scss/grid-section-card.scss']
})
export class TshirtsComponent {

  constructor( private metaDataService: MetaDataService ) {}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: '👕 Camisetas de ninjas',
      description: `Destaca entre los demás con una fabulosa 💝 camiseta ninja a pocos 💲`,
      slug: `${this.metaDataService.nameSite}/ropa/camisetas`,
      image: 'https://m.media-amazon.com/images/I/61t2y+uAo4L._AC_UL320_.jpg'
    })
  }

}