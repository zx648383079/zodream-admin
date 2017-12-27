/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule, Configs } from './@theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            baseEndpoint: Configs.host,
            login: {
              endpoint: 'auth/login',
              method: 'post',
            },
            register: {
              endpoint: 'auth/register',
              method: 'post',
            },
            logout: {
               endpoint: 'auth/logout',
               method: 'post',
             },
             requestPass: {
               endpoint: 'auth/password/request',
               method: 'post',
             },
             resetPass: {
               endpoint: 'auth/password/reset',
               method: 'post',
             },
           },
        },
      },
      forms: {},
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthGuard
  ],
})
export class AppModule {
}
