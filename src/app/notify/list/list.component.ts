import { Component, OnInit } from '@angular/core';

import { NotifyService } from '../notify.service';
import { INotification } from '../notification.interface';

@Component({
    selector: 'notify-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public notificationList: Array<INotification> = new Array<INotification>();

    constructor() {
        NotifyService.notification.subscribe(
            notification => {
                this.notificationList.push(notification);
            }
        );
    }

    ngOnInit() { }

    public handlePop(notification: INotification) {
        const index = this.notificationList.indexOf(notification);
        if (index > -1)
            this.notificationList.splice(index, 1);
    }
}
