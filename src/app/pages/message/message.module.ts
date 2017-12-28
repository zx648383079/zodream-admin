import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';

import { MessageRoutingModule, routedComponents } from './message.routing';
import { ChatService } from './components/chat/chat.service';
import { SettingService } from './components/setting/setting.service';
import { ThemeModule } from '../../@theme/index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ThemeModule,
    MessageRoutingModule,
    HttpClientModule,
    NgPipesModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    ChatService,
    SettingService
  ]
})
export class MessageModule {
}
