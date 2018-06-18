import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  navLinks: any;
  constructor() { }

  ngOnInit() {
    this.navLinks = [
      { label: 'Past Training', path: 'past' },
      { label: 'New Training', path: 'new' }
    ];
  }
}
