import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoFoundRoutingModule } from './no-found.routing';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    Page404Component
  ],
  imports: [
    CommonModule,
    NoFoundRoutingModule
  ]
})
export class NoFoundModule { }
