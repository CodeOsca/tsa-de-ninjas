import { Component, Input } from '@angular/core';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['../../scss/card.scss' ]
})

export class CardComponent {
  @Input() card!:Card

}
