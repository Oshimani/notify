import { Component, OnInit } from '@angular/core';
import { NotifyService } from './notify/notify.service';
import { Notification } from './notify/notification.model';
import { NotificationLevel } from './notify/notification.level';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {
  }

  ngOnInit() {
  }

  public trigger(level: NotificationLevel) {
    NotifyService.newNotification(new Notification({
      level: level,
      message: 'An Error occured',
      heading: 'ERROR',
      timeout: 5000,
      dismissable: true
    }));
  }
}
