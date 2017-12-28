import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './notification.component';
import { NotifyComponent } from './components/notify/notify.component';
import { SettingComponent } from './components/setting/setting.component';

const routes: Routes = [{
  path: '',
  component: NotificationComponent,
  children: [
    { path: 'notify', component: NotifyComponent },
    { path: 'setting', component: SettingComponent },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class NotificationRoutingModule {

}

export const routedComponents = [
  NotificationComponent,
  NotifyComponent,
  SettingComponent
];
