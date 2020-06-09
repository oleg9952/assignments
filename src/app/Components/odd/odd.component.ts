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
  @Input() numOdd: number;

  constructor() { }

  ngOnInit(): void {
  }
}
