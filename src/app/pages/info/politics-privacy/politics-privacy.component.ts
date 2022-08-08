import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-politics-privacy',
  templateUrl: './politics-privacy.component.html',
  styleUrls: []
})
export class PoliticsPrivacyComponent implements OnInit {

  constructor( private metaDataService:MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateNoIndex()
  }

}
