import { Component} from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../../services/main.service'; 

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: [
    './stars.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class StarsComponent  {

 stars:Card[] = [
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
