import { Component, Input } from '@angular/core';
import { Card } from '../../interfaces/card';


@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['../../scss/card.scss']
})

export class CardHomeComponent{
  @Input() card!:Card
}
