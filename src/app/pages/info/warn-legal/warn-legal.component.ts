import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-warn-legal',
  templateUrl: './warn-legal.component.html',
  styleUrls: []
})
export class WarnLegalComponent implements OnInit {

  constructor( private metaDataService:MetaDataService ){}

  ngOnInit(): void {
    this.metaDataService.generateNoIndex()
  }

}
