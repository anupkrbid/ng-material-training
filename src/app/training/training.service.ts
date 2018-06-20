import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private pastExercises: Exercise[] = [];
  private availableExercises: Exercise[] = [
    { id: 'test', name: 'Test', duration: 10, calories: 2 },
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];
  constructor(private router: Router) { }

  getExercises() {
    return this.availableExercises.slice();
  }

  getPastExercises() {
    return this.pastExercises.slice();
  }

  findOngoingExercise(exercideId: string) {
    return this.availableExercises.find(ex => ex.id === exercideId);
  }

  completeExercise(exercise: Exercise, progress: number) {
    this.pastExercises.push({
      ...exercise,
      duration:  !!progress ? exercise.duration * (progress / 100) : exercise.duration,
      calories: !!progress ? exercise.calories * (progress / 100) : exercise.calories,
      status: !!progress ? 'cancelled' : 'completed',
      date: new Date()
    });
    this.router.navigate(['training/new']);
  }
}
