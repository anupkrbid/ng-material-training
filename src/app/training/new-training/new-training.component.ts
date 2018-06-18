import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  exercises: any;
  constructor() { }

  ngOnInit() {
    this.exercises = [
      { value: 'crunches', label: 'Crunches' },
      { value: 'touch-toes', label: 'Touch Toes' },
      { value: 'side-lunges', label: 'Side Lunges' },
      { value: 'burpees', label: 'Burpees' }
    ];
  }
}
