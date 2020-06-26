import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

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

  notifyAdd(productName: string): void {
    const id = uuidv4();
    this.notifications.push(<NotificInterf>{
      id: id,
      type: 'add',
      message: `You've added ${productName}`
    });
    this.clearNotifi(id);
  }

  notifyEdit(productName: string): void {
    const id = uuidv4();
    this.notifications.push(<NotificInterf>{
      id: id,
      type: 'edit',
      message: `You've edited ${productName}`
    });
    this.clearNotifi(id);
  }

  notifyClone(productName: string): void {
    const id = uuidv4();
    this.notifications.push(<NotificInterf>{
      id: id,
      type: 'clone',
      message: `You've cloned ${productName}`
    });
    this.clearNotifi(id);
  }

  notifyDelete(productName: string): void {
    const id = uuidv4();
    this.notifications.push(<NotificInterf>{
      id: id,
      type: 'delete',
      message: `You've deleted ${productName}`
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
