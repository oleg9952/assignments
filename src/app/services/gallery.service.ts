import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  launches: Array<object> = []

  constructor(private http: HttpClient) { }

  
}
