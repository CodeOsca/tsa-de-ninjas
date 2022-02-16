import { Component } from '@angular/core';
import { MainService } from '../../shared/services/main.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})

export class Page404Component{
  constructor( private mainService:MainService ){
    mainService.scrollZero()
  }

  get nameSite():string{
    return this.mainService.nameSite
  }
}
