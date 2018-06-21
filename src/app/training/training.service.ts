import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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
  constructor(private router: Router, private db: AngularFirestore) {}

  getExercises() {
    return this.db
      .collection('exercises')
      .snapshotChanges()
      .pipe(
        map(results => {
          return results.map(result => {
            const id = result.payload.doc.id;
            const data = result.payload.doc.data() as Exercise;
            return { id, ...data };
          });
        })
      );
  }

  getPastExercises() {
    return this.pastExercises.slice();
  }

  findOngoingExercise(exercideId: string) {
    const exerciseDocument: AngularFirestoreDocument<Exercise> = this.db.doc<Exercise>(`exercises/${exercideId}`);
    return exerciseDocument
      .snapshotChanges()
      .pipe(
        map(result => {
            const id = result.payload.id;
            const data = result.payload.data() as Exercise;
            return { id, ...data };
        })
      );
  }

  completeExercise(exercise: Exercise, progress: number) {
    this.pastExercises.push({
      ...exercise,
      duration: !!progress ? exercise.duration * (progress / 100) : exercise.duration,
      calories: !!progress ? exercise.calories * (progress / 100) : exercise.calories,
      status: !!progress ? 'cancelled' : 'completed',
      date: new Date()
    });
    this.router.navigate(['training/new']);
  }
}
