import { Component} from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';

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

  constructor(
    private mainService:MainService,
    private metaDataService: MetaDataService,
    private title:Title
    ){}


    ngOnInit(): void {
      let t:string = `Autenticas Estrellas ${this.getName.slice(3)}`
      this.title.setTitle(t)
      this.metaDataService.generateTags({
        title:t,
        description:`Las estrellas son una de las armas clásicas de los ${this.getName.slice(3)} todo ${this.getName.slice(3).replace('s','')} que se respecte las usa`,
        slug:location.href,
        image:this.stars[0].imgUrl
      })
    }

  get getName(){
    return this.mainService.giveName()
  }

}
