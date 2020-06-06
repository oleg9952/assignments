import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-2';
  // ----- DATA BINDING -----
  username: string = 'James'

  resetUsername(): void {
    this.username = ''
  }

  // ----- DIRECTIVES -----
  showP: boolean = true
  numbers: Array<number> = []

  onClick(): void {
    this.showP = !this.showP
    if (this.numbers.length) {
      this.numbers.push(this.numbers[this.numbers.length - 1] + 1)
    } else {
      this.numbers.push(1)
    }
  }
}