import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers: Array<number> = []

  addNumber(num: number) {
    this.numbers.push(num)
    console.log('num added')
  }
}
