import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss', '../../shared/scss/grid-section-card.scss']
})
export class BagsComponent implements OnInit {

  constructor( private metaDataService: MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateTags({
      title:'Bolsos de ninjas',
      description:'Lleva tus cosas sin necesidad de cargar los tu bolso ninja pavo',
      slug:`${this.metaDataService.nameSite}/accesorios/bolsos`,
      image: ''
    })
  }

}
