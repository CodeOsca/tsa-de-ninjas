import { Component, Input } from '@angular/core';
import { MainService } from '../../services/main.service'; 
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.scss',
    '../../scss/card.scss'
  ]
})
export class CardComponent {

  @Input() card!:Card

  constructor( private mainService:MainService ){}

  get getName(){
    return this.mainService.giveName()
  }

}
