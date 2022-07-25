import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
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
  hiddenutton:boolean = true
  awords: Card[] = []

  constructor(
    private mainService: MainService,
    private metaDataService: MetaDataService
  ) {
    this.mainService.scrollZero()
    this.toggleButton()
  }

  ngOnInit(): void {
    let t: string = `Autenticas espadas ${this.getName}`
    this.metaDataService.generateTags({
      title: t,
      description: `El arte del arte, la disciplina de la espada, el punto de combate principal, la habilidad de pelear con espadas ${this.getName.slice(3).replace('s', '')}`,
      slug: `${this.mainService.nameSite}/accesorios/espadas`,
      image: 'https://www.amazon.es/WIDMAN-Katana-Japonesa-Corta-Cualquier/dp/B004X5I6MM/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622013&sprefix=espada+ninjas%2Caps%2C706&sr=8-1'
    })
  }

  get getName():string{
    return this.mainService.giveName()
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
