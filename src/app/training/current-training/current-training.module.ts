import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CurrentTrainingComponent } from './current-training.component';
import { CurrentTrainingRoutingModule } from './current-training-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { StopTrainingComponent } from './stop-training/stop-training.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CurrentTrainingRoutingModule,
    MaterialModule
  ],
  declarations: [
    CurrentTrainingComponent,
    StopTrainingComponent
  ],
  entryComponents: [StopTrainingComponent]
})
export class CurrentTrainingModule { }
