import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  navLinks: any;
  constructor() { }

  ngOnInit() {
    this.navLinks = [
      { label: 'Past Training', path: 'past' },
      { label: 'Current Training', path: 'current' },
      { label: 'New Training', path: 'new' }
    ];
  }

  show(data) {
    console.log(data);
  }

}
