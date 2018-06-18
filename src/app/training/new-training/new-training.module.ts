import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../../shared/material.module';
import { NewTrainingComponent } from './new-training.component';
import { NewTrainingRoutingModule } from './new-training-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NewTrainingRoutingModule,
    MaterialModule
  ],
  declarations: [NewTrainingComponent]
})
export class NewTrainingModule { }
