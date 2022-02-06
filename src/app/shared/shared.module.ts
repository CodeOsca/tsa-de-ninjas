import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';


import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [
  MenuComponent,
  FooterComponent
]

@NgModule({
  declarations: [ ...COMPONENTS ],
  exports: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
