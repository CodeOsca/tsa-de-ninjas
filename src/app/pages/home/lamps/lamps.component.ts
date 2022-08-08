import { Component, OnInit  } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { lamps2 } from '../../../constants/lamps.constant';

@Component({
  selector: 'app-lamps',
  templateUrl: './lamps.component.html',
  styleUrls: ['../../shared/scss/grid-section-card.scss']
})
export class LampsComponent implements OnInit {
  hiddenutton:boolean = false
  lamps: Card[] = []

  constructor( private metaDataService: MetaDataService) {}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: 'Lámparas de ninjas',
      description: 'Lámparas ninjas de buen precio, calidad y con estilo único en su clase',
      slug: `${this.metaDataService.nameSite}/hogar/lamparas`,
      image: 'https://m.media-amazon.com/images/I/51QojoYXTRL._AC_UL320_.jpg'
    })
  }

  incrementsProducts(){
    this.lamps = lamps2
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton(){
    this.incrementsProducts()
    this.toggleButton()
  }
}