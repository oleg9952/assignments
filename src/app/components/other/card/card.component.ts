import { Component, OnInit, Input } from '@angular/core';

export interface MissionImgs {
  flickr_images: Array<string>
}

export interface Mission {
  flight_number: number;
  mission_name: string;
  imgs: Array<string>
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() mission: Mission
  cardImage: string = null

  constructor() { }

  ngOnInit(): void {
    this.cardImage = this.mission.imgs[0]
  }

}
