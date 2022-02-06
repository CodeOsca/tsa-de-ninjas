import { Component, Input, AfterContentInit } from '@angular/core';
import { MainService } from '../../../../services/main.service'; 
import { Card } from '../../interfaces/card';


@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})

export class CardHomeComponent{
  @Input() card!:Card

  constructor( private mainService:MainService ){}

  get getName(){
    return this.mainService.giveName()
  }
}
