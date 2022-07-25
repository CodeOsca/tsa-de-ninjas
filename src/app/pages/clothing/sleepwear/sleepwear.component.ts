import { Component } from '@angular/core';
import { MainService } from '../../shared/services/main.service';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-sleepwear',
  templateUrl: './sleepwear.component.html',
  styleUrls: [
    './sleepwear.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class SleepwearComponent {
  
  constructor(
    private mainService: MainService,
    private metaDataService: MetaDataService
  ) {
    this.mainService.scrollZero()
  }

  ngOnInit(): void {
    let t: string = `Pijamas ${this.getName}`
    this.metaDataService.generateTags({
      title: t,
      description: `La tela suave del pijama ${this.getName.slice(3).replace('s', '')} en definitiva te gustara, lo mejor en pijamas para adquirir mucho sueño dormir más`,
      slug: `${this.mainService.nameSite}/ropa/pijamas`,
      image: 'https://m.media-amazon.com/images/I/51QyPXpGdXL._AC_UL320_.jpg'
    })
  }

  get getName() {
    return this.mainService.giveName()
  }
}