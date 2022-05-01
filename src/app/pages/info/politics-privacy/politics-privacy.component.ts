import { Component, OnInit } from '@angular/core';
import { MainService } from '../../shared/services/main.service'; 
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-politics-privacy',
  templateUrl: './politics-privacy.component.html',
  styleUrls: ['./politics-privacy.component.scss']
})
export class PoliticsPrivacyComponent implements OnInit {

  constructor(
    private mainService:MainService,
    private metaDataService:MetaDataService
    ) { }

  ngOnInit(): void {
    this.mainService.scrollZero()
    this.metaDataService.generateNoIndex()
  }

}
