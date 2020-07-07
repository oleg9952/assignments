import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/Services/logging.service';
import { trigger, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('removal', [
      transition(':leave', [
        animate(500, style({
          opacity: '0',
          transform: 'translateX(calc(-100% - 10px))'
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  constructor(public loggingService: LoggingService) { }

  ngOnInit(): void {
  }

}
