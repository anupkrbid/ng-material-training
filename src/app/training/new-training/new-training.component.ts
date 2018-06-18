import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  exercises: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.exercises = [
      { value: 'crunches', label: 'Crunches' },
      { value: 'touch-toes', label: 'Touch Toes' },
      { value: 'side-lunges', label: 'Side Lunges' },
      { value: 'burpees', label: 'Burpees' }
    ];
  }

  onStartNewTraining() {
    this.router.navigate(['/training/current']);
  }
}
