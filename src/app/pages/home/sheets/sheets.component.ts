import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { sheets2 } from '../../../constants/sheets.constant';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['../../shared/scss/grid-section-card.scss']
})
export class SheetsComponent implements OnInit {
  hiddenutton:boolean = false
  sheets: Card[] = []

  constructor( private metaDataService: MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: 'Sábanas de ninja baratas',
      description: 'Sábanas ninja de buena calidad, muy buen precio y con estilo único en su clase',
      slug: `${this.metaDataService.nameSite}/hogar/sabanas`,
      image: 'https://m.media-amazon.com/images/I/81E9xUbdkHS._AC_UL320_.jpg'
    })
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