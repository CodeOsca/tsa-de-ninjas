import { Component } from '@angular/core';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-sleepwear',
  templateUrl: './sleepwear.component.html',
  styleUrls: ['../../shared/scss/grid-section-card.scss']
})
export class SleepwearComponent {
  
  constructor( private metaDataService: MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: 'Pijamas ninja',
      description: `Lo mejor en pijamas ninjas para adquirir mucho sueño y dormir más`,
      slug: `${this.metaDataService.nameSite}/ropa/pijamas`,
      image: 'https://m.media-amazon.com/images/I/51QyPXpGdXL._AC_UL320_.jpg'
    })
  }

}