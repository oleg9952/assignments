import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  inputLength: number = null;

  updateLength(length: number): void {
    this.inputLength = length;
  }
}
