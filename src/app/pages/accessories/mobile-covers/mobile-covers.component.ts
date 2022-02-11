import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-mobile-covers',
  templateUrl: './mobile-covers.component.html',
  styleUrls: [
    './mobile-covers.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})

export class MobileCoversComponent {

  coversMoviles:Card[] = [
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
    let t:string = `Fundas de teléfono ${this.getName.slice(3)}`
    this.title.setTitle(t)
    this.metaDataService.generateTags({
      title:t,
      description:`Estas fundas protegerán tu teléfono contra todo tipo de golpes, claro que eso no significa que vayas a darle coñazos a tu móvil solo para probarlos`,
      slug:location.href,
      image:this.coversMoviles[0].imgUrl
    })
  }

  get getName(){
    return this.mainService.giveName()
  }

}
