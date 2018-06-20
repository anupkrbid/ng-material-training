import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../shared/material.module';
import { PastTrainingComponent } from './past-training.component';
import { PastTrainingRoutingModule } from './past-training-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    PastTrainingRoutingModule,
  ],
  declarations: [PastTrainingComponent]
})
export class PastTrainingModule { }
