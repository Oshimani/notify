import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PopUpComponent } from './popup/popup.component';
import { ListComponent } from './list/list.component';

// Services
import { NotifyService } from './notify.service';

@NgModule({
    declarations: [
        PopUpComponent,
        ListComponent
    ],
    imports: [CommonModule],
    exports: [PopUpComponent, ListComponent],
    providers: [],
})
export class NotifyModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NotifyModule,
            providers: [NotifyService]
        };
    }
}
