import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getMissions()
  }

}
