import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers: Array<number> = [];

  addNumber(num: number) {
    this.numbers.push(num);
  }

  getEven(data: Array<number>): Array<number> {
    return data.filter((num: number) => num % 2 === 0);
  }

  getOdd(data: Array<number>): Array<number> {
    return data.filter((num: number) => num % 2 !== 0);
  }
}
