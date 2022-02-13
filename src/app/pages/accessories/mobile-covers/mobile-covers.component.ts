import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { MetaDataService } from '../../shared/services/meta-data.service';
import { MovilCoverService } from '../../shared/services/movil-covers.service';

@Component({
  selector: 'app-mobile-covers',
  templateUrl: './mobile-covers.component.html',
  styleUrls: [
    './mobile-covers.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})

export class MobileCoversComponent {
  hiddenutton:boolean = true
  coversMoviles:Card[] = []

  constructor(
    private mainService:MainService,
    private metaDataService: MetaDataService,
    private movilCoverService:MovilCoverService
  ){
    this.mainService.scrollZero()
    this.setProducts()
    this.toggleButton()
  }

  ngOnInit(): void {
    let t:string = `Fundas de teléfono ${this.getName.slice(3)}`
    this.metaDataService.generateTags({
      title:t,
      description:`Estas fundas protegerán tu teléfono contra todo tipo de golpes, claro que eso no significa que vayas a darle coñazos a tu móvil solo para probarlos`,
      slug:`${this.mainService.nameSite}/accesorios/fundas-moviles`,
      image:this.coversMoviles[0].imgUrl
    })
  }

  get getName(){
    return this.mainService.giveName()
  }

  setProducts(){
    this.coversMoviles = this.movilCoverService.movilCovers
  }

  incrementsProducts(){
    this.coversMoviles = this.coversMoviles.concat(this.movilCoverService.movilCovers2)
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton(){
    this.incrementsProducts()
    this.toggleButton()
  }
}