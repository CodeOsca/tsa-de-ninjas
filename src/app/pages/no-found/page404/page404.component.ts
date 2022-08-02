import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})

export class Page404Component implements OnInit {
  constructor( private metaDataService:MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateNoIndex()
  }
}
