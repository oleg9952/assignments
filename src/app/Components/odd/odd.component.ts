import { Component, OnInit, Input } from '@angular/core';
import { numberItem } from 'src/app/Utils/animations';
import { Subscription, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import ACTIONS from '../../Utils/actions';

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

  paint: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.eventsSub = this.events.subscribe((action) => {
      switch (action) {
        case ACTIONS.start:
          this.countSub = this.count
            .pipe(filter(num => num % 2 !== 0))
            .subscribe(num => this.odd.push(num));
          break;
        case ACTIONS.end:
          this.countSub.unsubscribe();
          break;
        case ACTIONS.paintOdd:
          this.paint = !this.paint;
          break;
        default:
          break;
      }
    });
  }

  handlePaint(): void {
    this.events.next(ACTIONS.paintEven);
  }

  ngOnDestroy(): void {
    this.countSub.unsubscribe();
    this.eventsSub.unsubscribe();
  } 
}
