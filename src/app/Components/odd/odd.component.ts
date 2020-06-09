import { Component, OnInit, Input } from '@angular/core';
import { numberItem } from 'src/app/Utils/animations';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss'],
  animations: [
    numberItem
  ]
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
