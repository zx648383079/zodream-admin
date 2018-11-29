import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './frontend.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FrontendRoutingModule
  ],
  declarations: [FrontendComponent, NotFoundComponent, HomeComponent]
})
export class FrontendModule { }
