import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { numberItem } from 'src/app/Utils/animations';
import { Subscription, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss'],
  animations: [
    numberItem
  ]
})
export class EvenComponent implements OnInit, OnDestroy {
  private countSub: Subscription;
  private eventsSub: Subscription;

  @Input() count: Observable<number>;
  @Input() events: Subject<string>;

  even: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    this.eventsSub = this.events.subscribe((action) => {
      if (action === 'start') {
        this.countSub = this.count.pipe(filter(num => num % 2 === 0))
          .subscribe(num => this.even.push(num));
        return;
      }
      this.countSub.unsubscribe();
    });
  }

  ngOnDestroy(): void {
    this.countSub.unsubscribe();
    this.eventsSub.unsubscribe();
  }  
}
