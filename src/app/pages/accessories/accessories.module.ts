import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesRoutingModule } from './accessories.routing';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


import { MasksComponent } from './masks/masks.component';
import { AwordsComponent } from './awords/awords.component';
import { MobileCoversComponent } from './mobile-covers/mobile-covers.component';
import { BackPackComponent } from './back-pack/back-pack.component';



@NgModule({
  declarations: [
    MasksComponent,
    AwordsComponent,
    MobileCoversComponent,
    BackPackComponent
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingModule,
    SharedModule,
    MatButtonModule
  ]
})
export class AccessoriesModule { }
