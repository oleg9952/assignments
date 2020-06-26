import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  notifyAdd(productName: string): void {
    console.log(`You've added ${productName}`)
  }

  notifyEdit(productName: string): void {
    console.log(`You've edited ${productName}`)
  }

  notifyClone(productName: string): void {
    console.log(`You've cloned ${productName}`)
  }

  notifyDelete(productName: string): void {
    console.log(`You've deleted ${productName}`)
  }
}
