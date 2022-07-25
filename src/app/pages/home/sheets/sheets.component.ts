import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { sheets2 } from '../../../constants/sheets.constant';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: [
    './sheets.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class SheetsComponent implements OnInit {
  hiddenutton:boolean = true
  sheets: Card[] = []

  constructor(
    private mainService: MainService,
    private metaDataService: MetaDataService
  ) {
    this.mainService.scrollZero()
    this.toggleButton()
  }

  ngOnInit(): void {
    let t: string = `Sábanas ${this.getName}`
    this.metaDataService.generateTags({
      title: t,
      description: `Sábanas ${this.getName.replace('s', '')} de buena calidad, muy buen precio y con estilo único en su clase`,
      slug: `${this.mainService.nameSite}/hogar/sabanas`,
      image: 'https://m.media-amazon.com/images/I/81E9xUbdkHS._AC_UL320_.jpg'
    })
  }

  get getName():string{
    return this.mainService.giveName()
  }

  incrementsProducts():void{
    this.sheets = sheets2
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton():void{
    this.incrementsProducts()
    this.toggleButton()
  }
}