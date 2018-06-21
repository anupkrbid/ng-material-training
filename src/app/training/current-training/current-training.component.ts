import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Exercise } from '../exercise.model';
import { StopTrainingComponent } from './stop-training/stop-training.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit, OnDestroy {
  progress = 0;
  timer: any;
  ongoingExercise: Exercise;
  ongoingExerciseSubscription: Subscription;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private trainingService: TrainingService
  ) {}

  ngOnInit() {
    this.ongoingExerciseSubscription = this.trainingService
      .findOngoingExercise(this.activatedRoute.snapshot.queryParams.exId)
      .subscribe(
        data => {
          this.ongoingExercise = data;
          if (!this.ongoingExercise) {
            this.router.navigate(['/training/new']);
          }

          const step = (this.ongoingExercise.duration / 100) * 1000;
          this.timer = setInterval(() => {
            if (this.progress + 1 > 100) {
              this.progress = 100;
              this.trainingService.completeExercise(this.ongoingExercise, null);
              clearInterval(this.timer);
            } else {
              this.progress++;
            }
          }, step);
        },
        err => console.log(err)
      );

  }

  onStopTraining() {
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        clearInterval(this.timer);
        this.trainingService.completeExercise(this.ongoingExercise, result);
      }
    });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    this.ongoingExerciseSubscription.unsubscribe();
  }
}
