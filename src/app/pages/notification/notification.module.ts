import { NgModule } from '@angular/core';

import { NotifyService } from './components/notify/notify.service';
import { SettingService } from './components/setting/setting.service';
import { ThemeModule } from '../../@theme/index';
import { NotificationRoutingModule, routedComponents } from './notification.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ThemeModule,
    NotificationRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    NotifyService,
    SettingService
  ]
})
export class NotificationModule {
}
