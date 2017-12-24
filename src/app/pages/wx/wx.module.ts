import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { WxRoutingModule, routedComponents } from './wx-routing.module';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    ThemeModule,
    WxRoutingModule
  ],
  declarations: [
    ...routedComponents,
    MessageComponent
  ]
})
export class WxModule { }
