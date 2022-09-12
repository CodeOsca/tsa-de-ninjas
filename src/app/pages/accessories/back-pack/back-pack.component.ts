import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-back-pack',
  templateUrl: './back-pack.component.html',
  styleUrls: ['../../shared/scss/grid-section-card.scss']
})
export class BackPackComponent implements OnInit {

  constructor( private metaDataService: MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title:'👜 Mochilas de ninjas',
      description:'Lleva tus cosas sin 🎊 necesidad de cargargas de la mano',
      slug:`${this.metaDataService.nameSite}/accesorios/bolsos`,
      image: 'https://m.media-amazon.com/images/I/71e5aIlhUhL._AC_UL320_.jpg'
    })
  }

}
