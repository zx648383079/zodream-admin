import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileRoutingModule, routedComponents } from './mobile-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgbModule,
    MobileRoutingModule,
  ],
  declarations: [...routedComponents]
})
export class MobileModule { }
