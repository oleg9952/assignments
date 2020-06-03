import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../components/other/card/card.component';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  api: string = 'https://api.spacexdata.com/v3/launches'
  missions: Array<Mission> = null
  output: Array<Mission> = null

  constructor(private http: HttpClient) { }

  getMissions():void {
    if (this.missions) return
    this.http.get<Array<Mission>>(this.api)
      .subscribe((resp: Array<Mission>) => { 
        const filtered: Array<Mission> = []

        resp.forEach((data: any) => {
          if (data.links.flickr_images.length) {
            filtered.push({
              flight_number: data.flight_number,
              mission_name: data.mission_name,
              imgs: data.links.flickr_images
            })
          }
        })
        this.missions = filtered
        this.output = this.missions.slice(0, 30)
      })
  }
  
}
