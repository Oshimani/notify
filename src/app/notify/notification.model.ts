import { NotificationLevel } from './notification.level';
import { INotification } from './notification.interface';

export class Notification {
    public level: NotificationLevel;
    public heading: string;
    public message: string;
    public timeout: number;
    public dismissable: boolean;

    constructor(notification: INotification) {
        this.level = notification.level;
        this.heading = notification.heading;
        this.message = notification.message;
        this.timeout = notification.timeout;
        this.dismissable = notification.dismissable;
    }
}
