import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../../services/main.service'; 

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: [
  './shoes.component.scss',
    '../../shared/scss/grid-section-card.scss'
  
  ]
})
export class ShoesComponent  {

  shoes:Card[] = [
    {
      title:'Un zapato',
      subtitle:'Compralo ahora',
      link:'/ropa/camisetas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:true
    }
  ]

  shoes2:Card[] = [
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
