import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(target: string): any {
    return JSON.parse(localStorage.getItem(target));
  }

  setItem(target: string, payload: any): void {
    localStorage.setItem(target, JSON.stringify(payload));
  }

  removeItem(target: string): void {
    localStorage.removeItem(target);
  }
}
