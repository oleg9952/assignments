import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Output() onStart = new EventEmitter<null>();
  @Output() onEnd = new EventEmitter<null>();

  // interval: any = null;
  // counter: number = 0;

  // btns state
  state: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  start(): void {
    this.state = !this.state;
    this.onStart.emit();
    // this.interval = setInterval(() => {
    //   this.counter += 1;
    //   this.payload.emit(this.counter);
    // }, 2000);
  }

  end(): void {
    this.state = !this.state;
    this.onEnd.emit();
    // clearInterval(this.interval);
  }

}
