import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrainingComponent } from './training.component';
import { TrainingRoutingModule } from './training-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TrainingRoutingModule
  ],
  declarations: [TrainingComponent]
})
export class TrainingModule { }
