import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit, OnDestroy {

  constructor( @Inject(PLATFORM_ID) private platformid:any ) {}


  ngOnDestroy(): void {
    this.resetBack()
  }

  ngOnInit(): void {
    this.changeBack()
  }




  changeBack(){
    if( isPlatformBrowser(this.platformid) ){
      document.body.style.backgroundColor = 'black'
    }
  }

  resetBack(){
    if( isPlatformBrowser(this.platformid) ){
      document.body.style.backgroundColor = 'initial'
    }

  }

}
