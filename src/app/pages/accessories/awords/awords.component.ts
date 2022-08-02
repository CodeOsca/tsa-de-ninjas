import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { awords2 } from '../../../constants/awords.constant';

@Component({
  selector: 'app-awords',
  templateUrl: './awords.component.html',
  styleUrls: [
    './awords.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class AwordsComponent {
  hiddenutton:boolean = false
  awords: Card[] = []

  constructor( private metaDataService: MetaDataService ) {}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: 'Autenticas espadas ninja',
      description: '¿Buscas una buena oferta en espadas ninjas de calidad? seguro que tengo buscas',
      slug: `${this.metaDataService.nameSite}/accesorios/espadas`,
      image: 'https://www.amazon.es/WIDMAN-Katana-Japonesa-Corta-Cualquier/dp/B004X5I6MM/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622013&sprefix=espada+ninjas%2Caps%2C706&sr=8-1'
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
