import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../../services/main.service'; 

@Component({
  selector: 'app-masks',
  templateUrl: './masks.component.html',
  styleUrls: [
    './masks.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class MasksComponent {

  masks:Card[] = [
    {
      title:'Una Sudaderas',
      subtitle:'Compralo ahora',
      link:'/ropa/sudaderas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:true
    }
  ]

  masksAnbus:Card[] = [
    {
      title:'Una Sudaderas',
      subtitle:'Compralo ahora',
      link:'/ropa/sudaderas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:true
    }
  ]

  constructor(
    private mainService:MainService
  ){}

  get getName(){
    return this.mainService.giveName()
  }

}
