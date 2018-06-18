import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { StopTrainingComponent } from './stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit, OnDestroy {

  progress = 0;
  timer: any;
  constructor(private dialog: MatDialog,
              private router: Router) {}

  ngOnInit() {
    this.timer = setInterval(() => {
      if (this.progress + 5 > 100) {
        this.progress = 100;
        clearInterval(this.timer);
      } else {
        this.progress = this.progress + 5;
      }
    }, 1000);
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
        this.router.navigate(['training/new']);
      }
    });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
