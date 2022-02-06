import { Component, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    this.resetBack()
  }

  ngOnInit(): void {
    this.changeBack()
  }




  changeBack(){
    if( true ){
      document.body.style.backgroundColor = 'black'
    }
  }

  resetBack(){
    document.body.style.backgroundColor = 'initial'
  }

}
