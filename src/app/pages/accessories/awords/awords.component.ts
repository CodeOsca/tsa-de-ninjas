import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { awords2 } from '../../../constants/awords.constant';

@Component({
  selector: 'app-awords',
  templateUrl: './awords.component.html',
  styleUrls: ['../../shared/scss/grid-section-card.scss']
})
export class AwordsComponent {
  hiddenutton:boolean = false
  awords: Card[] = []

  constructor( private metaDataService: MetaDataService ) {}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: '🔪 Autenticas espadas ninja',
      description: '¿Buscas una buena oferta en peligrosas ⚠️ espadas ninjas de calidad? ven acá',
      slug: `${this.metaDataService.nameSite}/accesorios/espadas`,
      image: 'https://m.media-amazon.com/images/I/710kyf85kmL._AC_UL320_.jpg'
    })
  }

  incrementsProducts():void{
    this.awords = awords2
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton():void{
    this.incrementsProducts()
    this.toggleButton()
  }
}
