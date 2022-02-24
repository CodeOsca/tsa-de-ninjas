import { Component, OnInit } from '@angular/core';
import { MainService } from '../../shared/services/main.service'; 

@Component({
  selector: 'app-politics-privacy',
  templateUrl: './politics-privacy.component.html',
  styleUrls: ['./politics-privacy.component.scss']
})
export class PoliticsPrivacyComponent implements OnInit {

  constructor(
    private mainService:MainService,
    ) { }

  ngOnInit(): void {
    this.mainService.scrollZero()
  }

}
