import { Component } from '@angular/core';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private mainService:MainService
  ) {}

  getName(){
    return this.mainService.giveName()
  }
}
