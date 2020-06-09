import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {
  @Input() numbers: Array<number>;

  constructor() { }

  ngOnInit(): void {
  }

  getEven(data: Array<number>): Array<number> {
    return data.filter((num: number) => num % 2 === 0);
  }
}
