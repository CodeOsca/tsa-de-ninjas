import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home.routing';
import { SheetsComponent } from './sheets/sheets.component';
import { LampsComponent } from './lamps/lamps.component';


@NgModule({
  declarations: [
  
    SheetsComponent,
       LampsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
