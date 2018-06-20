import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  exercises: Exercise[];
  constructor(private router: Router,
              private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.getExercises();
  }

  onStartNewTraining() {
    this.router.navigate(['/training/current']);
  }
}
