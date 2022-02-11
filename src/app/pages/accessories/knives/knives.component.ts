import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-knives',
  templateUrl: './knives.component.html',
  styleUrls: [
    './knives.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class KnivesComponent {

  knives:Card[] = [
    {
      title:'Una Sudaderas',
      subtitle:'Compralo ahora',
      link:'/ropa/sudaderas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:true
    }
  ]

  constructor(
    private mainService:MainService,
    private metaDataService: MetaDataService,
    private title:Title
  ){}


  ngOnInit(): void {
    let t:string = `Autenticas kunais ${this.getName.slice(3)}`
    this.title.setTitle(t)
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
