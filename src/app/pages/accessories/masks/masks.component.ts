import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';

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
    private mainService:MainService,
    private metaDataService: MetaDataService,
    private title:Title
  ){}

  ngOnInit(): void {
    let t:string = `Autenticas Máscaras ${this.getName.slice(3)}`
    this.title.setTitle(t)
    this.metaDataService.generateTags({
      title:t,
      description:`No permitas que nadie conozca tu verdadera identidad, esto es posible gracias a las máscaras ${this.getName.slice(3).replace('s','')}`,
      slug:location.href,
      image:this.masks[0].imgUrl
    })
  }

  get getName(){
    return this.mainService.giveName()
  }

}
