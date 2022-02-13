import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: [
    './vinyl.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class VinylComponent {

  vinyls:Card[] = [
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
    private metaDataService: MetaDataService
    ){}

    ngOnInit(): void {
      let t:string = `Vinilos ${this.getName.slice(3)}`
      this.metaDataService.generateTags({
        title:t,
        description:`te traemos una serie de vinilos shinobis para que puedas hacer todas las decoraciones que te plazcan y dejar tu marca`,
        slug:location.href,
        image:this.vinyls[0].imgUrl
      })
    }

  get getName():string{
    return this.mainService.giveName()
  }
}
