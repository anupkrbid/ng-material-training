import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../shared/material.module';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent,
    SideNavigationComponent
  ],
  exports: [
    HeaderComponent,
    SideNavigationComponent
  ]
})
export class CoreModule { }
