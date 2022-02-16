import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info.routing';

import { WarnLegalComponent } from './warn-legal/warn-legal.component';
import { PoliticsPrivacyComponent } from './politics-privacy/politics-privacy.component';



@NgModule({
  declarations: [
    WarnLegalComponent,
    PoliticsPrivacyComponent,
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
