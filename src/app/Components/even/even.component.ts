import { Component, OnInit, Input } from '@angular/core';
import { numberItem } from 'src/app/Utils/animations';


@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss'],
  animations: [
    numberItem
  ]
})
export class EvenComponent implements OnInit {
  @Input() numEven: number;

  constructor() { }

  ngOnInit(): void {
  }
}
