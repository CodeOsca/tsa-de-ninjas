import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { MetaDataService } from '../../shared/services/meta-data.service';
import { movilCovers2 } from '../../../constants/movil-covers.constant';

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
    private metaDataService: MetaDataService
  ){
    this.mainService.scrollZero()
    this.toggleButton()
  }

  ngOnInit(): void {
    let t:string = `Fundas de teléfono ${this.getName.slice(3)}`
    this.metaDataService.generateTags({
      title:t,
      description:`Estas fundas protegerán tu teléfono contra todo tipo de golpes, claro que eso no significa que vayas a darle coñazos a tu móvil solo para probarlos`,
      slug:`${this.mainService.nameSite}/accesorios/fundas-moviles`,
      image: 'https://m.media-amazon.com/images/I/411tWNiLP6L._AC_UL320_.jpg'
    })
  }

  get getName(){
    return this.mainService.giveName()
  }

  incrementsProducts(){
    this.coversMoviles = movilCovers2
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton(){
    this.incrementsProducts()
    this.toggleButton()
  }
}