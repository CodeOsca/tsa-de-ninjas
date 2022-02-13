import { Component, OnInit  } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { LampsService } from '../../shared/services/lamps.service';

@Component({
  selector: 'app-lamps',
  templateUrl: './lamps.component.html',
  styleUrls: [
    './lamps.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class LampsComponent implements OnInit {
  hiddenutton:boolean = true
  lamps: Card[] = []

  constructor(
    private mainService: MainService,
    private metaDataService: MetaDataService,
    private lampsService: LampsService
  ) {
    this.mainService.scrollZero()
    this.setProducts()
    this.toggleButton()
  }

  ngOnInit(): void {
    let t: string = `Lámparas ${this.getName}`
    this.metaDataService.generateTags({
      title: t,
      description: `Súper Lámparas ${this.getName} de buena calidad, con un precio barato y con estilo único en su clase`,
      slug: `${this.mainService.nameSite}/hogar/lamparas`,
      image: 'https://m.media-amazon.com/images/I/51QojoYXTRL._AC_UL320_.jpg'
    })
  }

  get getName() {
    return this.mainService.giveName()
  }

  setProducts(){
    this.lamps = this.lampsService.lamps
  }

  incrementsProducts(){
    this.lamps = this.lamps.concat(this.lampsService.lamps2)
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton(){
    this.incrementsProducts()
    this.toggleButton()
  }
}