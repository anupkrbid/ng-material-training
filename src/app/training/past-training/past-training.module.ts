import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastTrainingRoutingModule } from './past-training-routing.module';
import { PastTrainingComponent } from './past-training.component';

@NgModule({
  imports: [
    CommonModule,
    PastTrainingRoutingModule
  ],
  declarations: [PastTrainingComponent]
})
export class PastTrainingModule { }
