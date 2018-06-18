import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingComponent } from './training.component';

const routes: Routes = [
  { path: 'current', loadChildren: './current-training/current-training.module#CurrentTrainingModule' },
  { path: '', component: TrainingComponent, children: [
    { path: 'new', loadChildren: './new-training/new-training.module#NewTrainingModule' },
    { path: 'past', loadChildren: './past-training/past-training.module#PastTrainingModule' },
    { path: '**', redirectTo: '' }
  ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
