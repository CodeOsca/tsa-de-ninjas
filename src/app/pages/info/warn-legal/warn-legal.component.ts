import { Component, OnInit } from '@angular/core';
import { MainService } from '../../shared/services/main.service'; 
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-warn-legal',
  templateUrl: './warn-legal.component.html',
  styleUrls: ['./warn-legal.component.scss']
})
export class WarnLegalComponent implements OnInit {

  constructor(
    private mainService:MainService,
    private metaDataService:MetaDataService
    ){}

  ngOnInit(): void {
    this.mainService.scrollZero()
    this.metaDataService.generateNoIndex()
  }

}
