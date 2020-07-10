import { Component, OnInit, Input } from '@angular/core';
import { numberItem } from 'src/app/Utils/animations';
import { Subscription, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss'],
  animations: [
    numberItem
  ]
})
export class OddComponent implements OnInit {
  private countSub: Subscription;
  private eventsSub: Subscription;

  @Input() count: Observable<number>;
  @Input() events: Subject<string>;

  odd: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    this.eventsSub = this.events.subscribe((action) => {
      if (action === 'start') {
        this.countSub = this.count.pipe(filter(num => num % 2 !== 0))
          .subscribe(num => this.odd.push(num));
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
