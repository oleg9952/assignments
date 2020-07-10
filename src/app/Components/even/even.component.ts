import { Component, OnInit, Input } from '@angular/core';
import { numberItem } from 'src/app/Utils/animations';
import { Subscription, from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss'],
  animations: [
    numberItem
  ]
})
export class EvenComponent implements OnInit {
  @Input() appStatus: boolean;
  @Input() numbers: Array<number>;
  
  sub: Subscription;
  
  even: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    this.sub = from(this.numbers)
      .pipe(
        filter((num: any) => num % 2 === 0),
        toArray()
      ).subscribe((result: Array<number>) => {
        this.even = result;
      })
  }

  // getEven(): Array<number> {
  //   if (this.appStatus) {
  //     this.sub = from(this.numbers)
  //       .pipe(
  //         filter((num: any) => num % 2 === 0),
  //         toArray()
  //       ).subscribe((result: Array<number>) => {
  //         this.even = result;
  //         console.log(result)
  //       })
  //   } else {
  //     if (!this.sub) return;
  //     this.sub.unsubscribe();
  //   }
  //   return this.even;
  // }
}
