import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  giveName():string{
    return 'de ninjas'
  }

  scrollZero(){
    scrollTo(0,0)
  }
}
