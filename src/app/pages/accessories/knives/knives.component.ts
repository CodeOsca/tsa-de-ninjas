import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { MetaDataService } from '../../shared/services/meta-data.service';
import { knives, knives2 } from '../../../constants/knives.constant';

@Component({
  selector: 'app-knives',
  templateUrl: './knives.component.html',
  styleUrls: [
    './knives.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class KnivesComponent {
  knives:Card[] = []

  constructor(
    private mainService:MainService,
    private metaDataService: MetaDataService
  ){
    this.mainService.scrollZero()
  }

  ngOnInit(): void {
    let t:string = `Autenticas kunais ${this.getName.slice(3)}`
    this.metaDataService.generateTags({
      title:t,
      description:`Son tal afilados que pueden cortar de todo, menos al Susano`,
      slug:location.href,
      image:this.knives[0].imgUrl
    })
  }

  get getName(){
    return this.mainService.giveName()
  }
}