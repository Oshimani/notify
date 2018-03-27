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
  public displayHeading: boolean = true;
  public timeout: number = 5000;
  public allowDismiss: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  public trigger(level: NotificationLevel) {
    let message;
    let heading;
    switch (level) {
      case NotificationLevel.info:
        heading = 'Info';
        message = 'This is an Info, no action necessary';
        break;
      case NotificationLevel.warning:
        heading = 'Warning';
        message = 'Oh, watch out!';
        break;
      case NotificationLevel.error:
        heading = 'Error';
        message = 'AHH OMG ERROR Jesus christ!';
        break;
      default:
        heading = 'Success';
        message = 'Item created!';
        break;
    }
    NotifyService.newNotification(new Notification({
      level: level,
      message: message,
      heading: heading,
      timeout: this.timeout,
      dismissable: this.allowDismiss
    }));
  }
}
