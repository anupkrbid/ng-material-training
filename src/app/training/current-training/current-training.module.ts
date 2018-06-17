import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentTrainingRoutingModule } from './current-training-routing.module';
import { CurrentTrainingComponent } from './current-training.component';

@NgModule({
  imports: [
    CommonModule,
    CurrentTrainingRoutingModule
  ],
  declarations: [CurrentTrainingComponent]
})
export class CurrentTrainingModule { }
