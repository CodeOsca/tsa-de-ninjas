import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { movilCovers2 } from '../../../constants/movil-covers.constant';

@Component({
  selector: 'app-mobile-covers',
  templateUrl: './mobile-covers.component.html',
  styleUrls: ['../../shared/scss/grid-section-card.scss']
})

export class MobileCoversComponent {
  hiddenutton:boolean = false
  coversMoviles:Card[] = []

  constructor( private metaDataService: MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title:'📔 Fundas de teléfono ninja',
      description:`Estas fundas protegerán 👮‍♂️ tu teléfono contra todo tipo de golpes`,
      slug:`${this.metaDataService.nameSite}/accesorios/fundas-moviles`,
      image: 'https://m.media-amazon.com/images/I/411tWNiLP6L._AC_UL320_.jpg'
    })
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