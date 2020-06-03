import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery.service';
import { Mission } from '../../other/card/card.component';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit, OnDestroy {
  sub
  mission: Mission = null

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.mission = this.galleryService.missions.find((mission: Mission) => {
        if (mission.flight_number === parseInt(params.id)) {
          return mission
        }
      })
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
