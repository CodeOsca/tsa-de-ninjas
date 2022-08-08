import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MetaDataService } from '../../shared/services/meta-data.service';
import { costumes2 } from '../../../constants/costumes.constant';

@Component({
  selector: 'app-custumes',
  templateUrl: './costumes.component.html',
  styleUrls: ['../../shared/scss/grid-section-card.scss']
})
export class CostumesComponent implements OnInit {
  hiddenutton:boolean = false
  costumes: Card[] = []

  constructor( private metaDataService: MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title: 'Disfraces ninja',
      description: `Excelentes disfraces ninja, nadie sabrá si eres real o una copia, tenemos buenos precios y una calidad increíble`,
      slug: `${this.metaDataService.nameSite}/ropa/disfraces`,
      image: 'https://m.media-amazon.com/images/I/71FUYP95kCL._AC_UL320_.jpg'
    })
  }

  incrementsProducts():void{
    this.costumes = costumes2
  }

  toggleButton():void{
    this.hiddenutton = !this.hiddenutton
  }

  clickButton():void{
    this.incrementsProducts()
    this.toggleButton()
  }
}