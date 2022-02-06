import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';


import { CardHomeComponent } from './components/card-home/card-home.component';

@NgModule({
  declarations: [
    CardHomeComponent
  ],
  exports:[
    CardHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
