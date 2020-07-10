import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Output() onStart = new EventEmitter<null>();
  @Output() onEnd = new EventEmitter<null>();

  state: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  start(): void {
    this.state = !this.state;
    this.onStart.emit();
  }

  end(): void {
    this.state = !this.state;
    this.onEnd.emit();
  }

}
