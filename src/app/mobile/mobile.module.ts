import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileRoutingModule, routedComponents } from './mobile-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MobileResolver } from './mobile.resolver';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgbModule,
    MobileRoutingModule,
  ],
  declarations: [...routedComponents],
  providers: [MobileResolver]
})
export class MobileModule { }
