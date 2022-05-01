import { Component, OnInit } from '@angular/core';
import { MainService } from '../../shared/services/main.service';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})

export class Page404Component implements OnInit {
  constructor( 
    private mainService:MainService,
    private metaDataService:MetaDataService
    ){
    mainService.scrollZero()
  }

  get nameSite():string{
    return this.mainService.nameSite
  }

  ngOnInit(): void {
    this.metaDataService.generateNoIndex()
  }


}
