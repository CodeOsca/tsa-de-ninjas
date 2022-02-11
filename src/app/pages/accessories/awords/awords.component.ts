import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-awords',
  templateUrl: './awords.component.html',
  styleUrls: [
    './awords.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class AwordsComponent {

  awords:Card[] = [
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
    let t:string = `Autenticas espadas ${this.getName}`
    this.title.setTitle(t)
    this.metaDataService.generateTags({
      title:t,
      description:`El arte del arte, la disciplina de la espada, el punto de combate principal, la habilidad de pelear con espadas ${this.getName.slice(3).replace('s','')}`,
      slug:location.href,
      image:this.awords[0].imgUrl
    })
  }

  get getName(){
    return this.mainService.giveName()
  }
}
