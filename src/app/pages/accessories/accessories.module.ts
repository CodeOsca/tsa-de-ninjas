import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesRoutingModule } from './accessories.routing';
import { SharedModule } from '../shared/shared.module';


import { MasksComponent } from './masks/masks.component';
import { StarsComponent } from './stars/stars.component';
import { KnivesComponent } from './knives/knives.component';
import { AwordsComponent } from './awords/awords.component';
import { VinylComponent } from './vinyl/vinyl.component';
import { MobileCoversComponent } from './mobile-covers/mobile-covers.component';



@NgModule({
  declarations: [
    MasksComponent,
    StarsComponent,
    KnivesComponent,
    AwordsComponent,
    VinylComponent,
    MobileCoversComponent
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingModule,
    SharedModule
  ]
})
export class AccessoriesModule { }
