import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothingRoutingModule } from './clothing.routing';
import { SharedModule } from '../shared/shared.module';

import { TshirtsComponent } from './tshirts/tshirts.component';
import { SweatshirtsComponent } from './sweatshirts/sweatshirts.component';
import { ShoesComponent } from './shoes/shoes.component';
import { SleepwearComponent } from './sleepwear/sleepwear.component';
import { CostumesComponent } from './costumes/costumes.component';




@NgModule({
  declarations: [
    TshirtsComponent,
    SweatshirtsComponent,
    ShoesComponent,
    SleepwearComponent,
    CostumesComponent
  ],
  imports: [
    CommonModule,
    ClothingRoutingModule,
    SharedModule
  ]
})
export class ClothingModule { }
