import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../../shared/material.module';
import { CurrentTrainingRoutingModule } from './current-training-routing.module';
import { CurrentTrainingComponent } from './current-training.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CurrentTrainingRoutingModule,
    MaterialModule
  ],
  declarations: [CurrentTrainingComponent]
})
export class CurrentTrainingModule { }
