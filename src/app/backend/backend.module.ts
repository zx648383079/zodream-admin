import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend.component';
import { BackendRoutingModule } from './backend-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from '../@theme/theme.module';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    BackendRoutingModule
  ],
  declarations: [BackendComponent, NotFoundComponent, HomeComponent, ActivityComponent]
})
export class BackendModule { }
