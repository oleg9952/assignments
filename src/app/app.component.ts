import { Component } from '@angular/core';
import { interval, Subscription, from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers: Array<number> = [];

  appRuning: boolean = false;
  
  numGenSub: Subscription;
  // numRetreaverObs: Subscription;

  start(): void {
    this.numGenSub = interval(1000)
      .subscribe(count => {
        this.numbers.push(count)
      });
    this.appRuning = true;

    // this.retrEven()
  }

  end(): void {
    this.numGenSub.unsubscribe();
    this.appRuning = false;
    // this.numRetreaverObs.unsubscribe();
  }

  // retrEven(): void {
  //   this.numRetreaverObs = from(this.numbers)
  //     .pipe(
  //       filter((num: any) => num % 2 === 0),
  //       toArray()
  //     )
  //     .subscribe(x => console.log(x))
  // }

  // getEven(data: Array<number>): Array<number> {
  //   return data.filter((num: number) => num % 2 === 0);
  // }

  // getOdd(data: Array<number>): Array<number> {
  //   return data.filter((num: number) => num % 2 !== 0);
  // }
}
