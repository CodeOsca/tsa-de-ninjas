import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { AwordsService } from '../../shared/services/awords.service';

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
    private metaDataService: MetaDataService,
    private awordsService: AwordsService
  ) {
    this.mainService.scrollZero()
    this.setProducts()
    this.toggleButton()
  }

  ngOnInit(): void {
    let t: string = `Autenticas espadas ${this.getName}`
    this.metaDataService.generateTags({
      title: t,
      description: `El arte del arte, la disciplina de la espada, el punto de combate principal, la habilidad de pelear con espadas ${this.getName.slice(3).replace('s', '')}`,
      slug: `${this.mainService.nameSite}/accesorios/espadas`,
      image: this.awords[0].imgUrl
    })
  }

  get getName():string{
    return this.mainService.giveName()
  }

  setProducts():void{
    this.awords = this.awordsService.awords
  }

  incrementsProducts():void{
    this.awords = this.awords.concat(this.awordsService.awords2)
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton():void{
    this.incrementsProducts()
    this.toggleButton()
  }
}
