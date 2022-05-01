import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( @Inject( PLATFORM_ID ) private platformId:string ){}

  giveName():string{
    return 'de ninjas'
  }

  scrollZero(){
    if(isPlatformBrowser(this.platformId)){
      scrollTo(0,0)
    }
  }

  get nameSite():string{
    return 'deninjas.store'
  }
}
