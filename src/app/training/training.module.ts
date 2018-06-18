import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { TrainingComponent } from './training.component';
import { TrainingRoutingModule } from './training-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TrainingRoutingModule,
    MaterialModule
  ],
  declarations: [TrainingComponent]
})
export class TrainingModule { }
