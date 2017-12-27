import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { WxRoutingModule, routedComponents } from './wx-routing.module';
import { MessageComponent } from './message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu/menu.service';
import { MediaComponent } from './media/media.component';
import { MediaService } from './media/media.service';
import { ReplyService } from './message/reply.service';

@NgModule({
  imports: [
    ThemeModule,
    WxRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    MenuService,
    MediaService,
    ReplyService
  ]
})
export class WxModule { }
