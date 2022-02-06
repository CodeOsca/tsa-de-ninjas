import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../../services/main.service'; 

@Component({
  selector: 'app-custumes',
  templateUrl: './costumes.component.html',
  styleUrls: [
    './costumes.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class CostumesComponent {

  costumes:Card[] = [
    {
      title:'Una Camiseta',
      subtitle:'Compralo ahora',
      link:'/ropa/camisetas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:true
    }
  ]

  clothings:Card[] = [
    {
      title:'Una Camiseta',
      subtitle:'Compralo ahora',
      link:'/ropa/camisetas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:true
    }
  ]

  constructor(private mainService:MainService){}

  get getName(){
    return this.mainService.giveName()
  }
}
