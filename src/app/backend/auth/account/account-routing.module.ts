import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { ConnectComponent } from './connect/connect.component';
import { PasswordComponent } from './password/password.component';
import { LoginLogComponent } from './login-log/login-log.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'connect',
        component: ConnectComponent
      },
      {
        path: 'password',
        component: PasswordComponent
      },
      {
        path: 'login_log',
        component: LoginLogComponent
      },
      {
        path: 'log',
        component: LogComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

export const accountRoutedComponents = [
  AccountComponent,
  ProfileComponent,
  ConnectComponent,
  PasswordComponent,
  LoginLogComponent,
  LogComponent
];
