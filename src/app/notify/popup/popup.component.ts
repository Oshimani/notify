import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NotifyService } from '../notify.service';
import { INotification } from '../notification.interface';

@Component({
    selector: 'notify-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopUpComponent implements OnInit {
    @Input() notification: INotification;

    @Output() pop: EventEmitter<INotification> = new EventEmitter<INotification>();

    constructor() {

    }

    ngOnInit() {
        if (this.notification.timeout !== undefined && this.notification.timeout > 0) {
            setTimeout(() => {
                this.dismiss();
            }, this.notification.timeout);
        }
    }

    public dismiss() {
        this.pop.emit(this.notification);
    }
}
