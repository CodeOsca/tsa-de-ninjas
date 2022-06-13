import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { MetaDataService } from '../../shared/services/meta-data.service';
import { masks } from '../../../constants/masks.constant';

@Component({
  selector: 'app-masks',
  templateUrl: './masks.component.html',
  styleUrls: [
    './masks.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class MasksComponent {
  masks:Card[] = []

  constructor(
    private mainService:MainService,
    private metaDataService: MetaDataService
  ){
    this.mainService.scrollZero()
    this.setProducts()
  }

  ngOnInit(): void {
    let t:string = `Autenticas Máscaras ${this.getName.slice(3)}`
    this.metaDataService.generateTags({
      title:t,
      description:`No permitas que nadie conozca tu verdadera identidad, esto es posible gracias a las máscaras ${this.getName.slice(3).replace('s','')}`,
      slug:`${this.mainService.nameSite}/accesorios/mascaras`,
      image:this.masks[0].imgUrl
    })
  }

  get getName():string{
    return this.mainService.giveName()
  }

  setProducts():void{
    this.masks = masks
  }
}