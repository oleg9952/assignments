import { Component } from '@angular/core';
import { interval, Subscription, from, Observable, Subject } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers: Array<number> = [];

  eventsSubject: Subject<string> = new Subject();

  count$: Observable<number> = new Observable(observer => {
    let counter: number = 0;

    setInterval(() => {
      if (counter >= 10) {
        observer.complete();
      }
      counter += 1;
      observer.next(counter);
    }, 1000)
  });

  start(): void {
    this.eventsSubject.next('start')
  }

  end(): void {
    this.eventsSubject.next('end');
  }
}
