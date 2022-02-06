import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../../services/main.service'; 

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: [
    './vinyl.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class VinylComponent {

  vinyls:Card[] = [
    {
      title:'Un zapato',
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
