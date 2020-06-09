import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {
  @Input() numbers: Array<number>;


  constructor() { }

  ngOnInit(): void {
  }

  getOdd(data: Array<number>): Array<number> {
    return data.filter((num: number) => num % 2 !== 0);
  }
}
