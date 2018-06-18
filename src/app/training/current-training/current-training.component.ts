import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit, OnDestroy {

  progress = 0;
  timer: any;
  constructor() { }

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
    clearInterval(this.timer);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
