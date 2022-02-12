import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { SheetsService } from '../../shared/services/sheets.service';

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
    private metaDataService: MetaDataService,
    private title: Title,
    private sheetsService: SheetsService
  ) {
    this.mainService.scrollZero()
    this.setProducts()
    this.toggleButton()
  }

  ngOnInit(): void {
    let t: string = `Sábanas ${this.getName}`
    this.title.setTitle(t)
    this.metaDataService.generateTags({
      title: t,
      description: `Sábanas ${this.getName.replace('s', '')} de buena calidad, muy buen precio y con estilo único en su clase`,
      slug: location.href,
      image: 'https://m.media-amazon.com/images/I/81E9xUbdkHS._AC_UL320_.jpg'
    })
  }

  get getName() {
    return this.mainService.giveName()
  }

  setProducts(){
    this.sheets = this.sheetsService.sheets
  }

  incrementsProducts(){
    this.sheets = this.sheets.concat(this.sheetsService.sheets2)
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton(){
    this.incrementsProducts()
    this.toggleButton()
  }
}