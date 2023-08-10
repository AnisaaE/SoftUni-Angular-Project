import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notification: { message: string; type: string } | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe((notification:any) => {
      this.notification = notification;
      if (notification) {
        setTimeout(() => {
          this.notificationService.clearNotification();
        }, this.notificationService.duration);
      }
    });
  }
}
