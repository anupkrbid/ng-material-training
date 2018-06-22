import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  isLoading$ = new BehaviorSubject<boolean>(false);
  constructor(private router: Router, private db: AngularFirestore) {}

  getExercises() {
    this.isLoading$.next(true);
    const exerciseCollection: AngularFirestoreCollection<Exercise> = this.db.collection('exercises');
    return exerciseCollection
      .snapshotChanges()
      .pipe(
        tap(() => this.isLoading$.next(false)),
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
    this.isLoading$.next(true);
    const exerciseCollection: AngularFirestoreCollection<Exercise> = this.db.collection('past-exercises');
    return exerciseCollection.valueChanges().pipe(tap(() => this.isLoading$.next(false)));
  }

  findOngoingExercise(exercideId: string) {
    this.isLoading$.next(true);
    const exerciseDocument: AngularFirestoreDocument<Exercise> = this.db.doc<Exercise>(`exercises/${exercideId}`);
    return exerciseDocument
      .snapshotChanges()
      .pipe(
        tap(() => this.isLoading$.next(false)),
        map(result => {
            const id = result.payload.id;
            const data = result.payload.data() as Exercise;
            return { id, ...data };
        })
      );
  }

  completeExercise(exercise: Exercise, progress: number) {
    const performedExercise = {
      ...exercise,
      duration: !!progress ? exercise.duration * (progress / 100) : exercise.duration,
      calories: !!progress ? exercise.calories * (progress / 100) : exercise.calories,
      status: !!progress ? 'cancelled' : 'completed',
      date: new Date()
    };
    delete performedExercise.id;
    this.db.collection('past-exercises').add(performedExercise);
    this.router.navigate(['training/new']);
  }
}
