import { Component } from '@angular/core';
import { MainService } from '../../shared/services/main.service'; 
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

  constructor(
    private mainService:MainService,
    private metaDataService: MetaDataService
  ){
    this.mainService.scrollZero()
  }

  ngOnInit(): void {
    let t:string = `Autenticas Máscaras ${this.getName.slice(3)}`
    this.metaDataService.generateTags({
      title:t,
      description:`No permitas que nadie conozca tu verdadera identidad, esto es posible gracias a las máscaras ${this.getName.slice(3).replace('s','')}`,
      slug:`${this.mainService.nameSite}/accesorios/mascaras`,
      image: 'https://m.media-amazon.com/images/I/71uomCx3p9S._AC_UL320_.jpg'
    })
  }

  get getName():string{
    return this.mainService.giveName()
  }

}