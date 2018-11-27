import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './@theme/theme.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './@theme/theme.reducers';
import { ToastrModule } from 'ngx-toastr';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { myAuthConfig } from './@theme/oauth_config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-zo' }),
    BrowserTransferStateModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    Ng2UiAuthModule.forRoot(myAuthConfig),
    StoreModule.forRoot(reducers, { metaReducers }),
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      progressAnimation: 'increasing'
    }),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
