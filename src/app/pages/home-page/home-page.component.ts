import { Component } from '@angular/core';
import { MetaDataService } from '../shared/services/meta-data.service';
import { Card } from '../shared/interfaces/card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['../shared/scss/grid-section-card.scss']
})
export class HomePageComponent {

  constructor( private metaDataService:MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title:'Tienda online de productos de ninjas',
      description:'Tenemos una serie de productos de ninjas, tales como camisetas, sudaderas, vestimenta, disfraces, fundas móviles, lámparas, sabanas y mucho más a buen precio y calidad',
      slug:`${this.metaDataService.nameSite}`,
      image:"https://m.media-amazon.com/images/I/61gFnOvYnJL._AC_UL320_.jpg"
    })
  }
}
