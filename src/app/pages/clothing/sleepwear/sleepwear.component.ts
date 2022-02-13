import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { SleepWearService } from '../../shared/services/sleepwear.service';

@Component({
  selector: 'app-sleepwear',
  templateUrl: './sleepwear.component.html',
  styleUrls: [
    './sleepwear.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class SleepwearComponent {
  sleepwears: Card[] = []

  constructor(
    private mainService: MainService,
    private metaDataService: MetaDataService,
    private sleepWearService: SleepWearService
  ) {
    this.setProducts()
    this.mainService.scrollZero()
  }

  ngOnInit(): void {
    let t: string = `Pijamas ${this.getName}`
    this.metaDataService.generateTags({
      title: t,
      description: `La tela suave del pijama ${this.getName.slice(3).replace('s', '')} en definitiva te gustara, lo mejor en pijamas para adquirir mucho sueño dormir más`,
      slug: `${this.mainService.nameSite}/ropa/pijamas`,
      image: this.sleepwears[0].imgUrl
    })
  }

  get getName() {
    return this.mainService.giveName()
  }

  setProducts(){
    this.sleepwears = this.sleepWearService.sleepWears
  }
}