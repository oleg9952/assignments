import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import ACTIONS from './loggingActions'

export interface NotificInterf {
  id: string;
  type: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  notifications: Array<NotificInterf> = [];

  constructor() { }

  notify(productName: string, type: string): void {
    const id = uuidv4();
    this.notifications.push(<NotificInterf>{
      id,
      type,
      message: `${ACTIONS[type].message} ${productName}`
    });
    this.clearNotifi(id);
  }

  clearNotifi(notifId): void {
    setTimeout(() => {
      const index: number = this.notifications.findIndex((notif: NotificInterf) => notif.id === notifId);
      this.notifications.splice(index, 1);
    }, 5000);
  }
}
