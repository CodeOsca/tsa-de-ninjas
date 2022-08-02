import { Component } from '@angular/core';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: [
    './shoes.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class ShoesComponent {
  constructor( private metaDataService: MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: 'Zapatos de ninjas',
      description: `El mejor calzado de ninja que puedes encontrar al mejor calidad y buen precio`,
      slug: `${this.metaDataService.nameSite}/ropa/zapatos`,
      image: 'https://m.media-amazon.com/images/I/51rpjpFhK7S._AC_UL320_.jpg'
    })
  }

}