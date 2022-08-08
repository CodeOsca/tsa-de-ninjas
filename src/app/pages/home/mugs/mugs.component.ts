import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-mugs',
  templateUrl: './mugs.component.html',
  styleUrls: ['../../shared/scss/grid-section-card.scss' ]
})
export class MugsComponent implements OnInit {

  constructor( private metaDataService: MetaDataService) {}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: 'Tazas ninjas',
      description: 'Tazas geniales con temática de ninjas al mejor precio',
      slug: `${this.metaDataService.nameSite}/hogar/tazas`,
      image: 'https://m.media-amazon.com/images/I/418XI+rlb-L._AC_UL320_.jpg'
    })
  }

}
