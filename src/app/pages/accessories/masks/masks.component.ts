import { Component } from '@angular/core';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-masks',
  templateUrl: './masks.component.html',
  styleUrls: [
    './masks.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class MasksComponent {

  constructor( private metaDataService: MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title:'Autenticas Máscaras de ninja',
      description:`Las mejores mascaras de ninja que tu como un fanático ninja puedes comprar`,
      slug:`${this.metaDataService.nameSite}/accesorios/mascaras`,
      image: 'https://m.media-amazon.com/images/I/71uomCx3p9S._AC_UL320_.jpg'
    })
  }

}