import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import ACTIONS from './Utils/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  eventsSubject: Subject<string> = new Subject<string>();

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
    this.eventsSubject.next(ACTIONS.start)
  }

  end(): void {
    this.eventsSubject.next(ACTIONS.end);
  }
}
