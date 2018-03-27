import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { NotifyService } from '../notify.service';
import { INotification } from '../notification.interface';
import { } from '@angular/core/src/render3';

@Component({
    selector: 'notify-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
            ]),
            transition(':leave', [
                animate('200ms ease-in', style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
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
