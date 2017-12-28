import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message.component';
import { ChatComponent } from './components/chat/chat.component';
import { SettingComponent } from './components/setting/setting.component';


const routes: Routes = [{
  path: '',
  component: MessageComponent,
  children: [
    { path: 'chat', component: ChatComponent },
    { path: 'setting', component: SettingComponent },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MessageRoutingModule {

}

export const routedComponents = [
  MessageComponent,
  ChatComponent,
  SettingComponent
];
