import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { mugs2 } from '../../../constants/mugs.constant';
import { Card } from '../../shared/interfaces/card';

@Component({
  selector: 'app-mugs',
  templateUrl: './mugs.component.html',
  styleUrls: ['../../shared/scss/grid-section-card.scss' ]
})
export class MugsComponent implements OnInit {
  hiddenutton:boolean = false
  mugs:Card[] = []

  constructor( private metaDataService: MetaDataService) {}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: 'Tazas ninjas',
      description: 'Tazas geniales con temática de ninjas al mejor precio',
      slug: `${this.metaDataService.nameSite}/hogar/tazas`,
      image: 'https://m.media-amazon.com/images/I/418XI+rlb-L._AC_UL320_.jpg'
    })
  }

  incrementsProducts(){
    this.mugs = mugs2
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton(){
    this.incrementsProducts()
    this.toggleButton()
  }

}
