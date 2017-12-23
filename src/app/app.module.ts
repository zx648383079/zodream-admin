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
import { ThemeModule } from './@theme/theme.module';
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
            baseEndpoint: 'http://zodream.localhost:8080/api.php/v1',
            login: {
              endpoint: '/auth/sign-in',
            },
            register: {
              endpoint: '/auth/sign-up',
            },
            logout: {
               endpoint: '/auth/sign-out',
             },
             requestPass: {
               endpoint: '/auth/request-pass',
             },
             resetPass: {
               endpoint: '/auth/reset-pass',
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
