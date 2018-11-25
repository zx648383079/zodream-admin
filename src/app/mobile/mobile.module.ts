import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile.component';
import { MobileRoutingModule } from './mobile-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    MobileRoutingModule,
  ],
  declarations: [MobileComponent, NotFoundComponent, HomeComponent]
})
export class MobileModule { }
