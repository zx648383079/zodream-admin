import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WxComponent } from './wx.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [{
  path: '',
  component: WxComponent,
  children: [{
    path: 'message',
    component: MessageComponent,
  }, {
    path: 'menu',
    component: MenuComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class WxRoutingModule {

}

export const routedComponents = [
  WxComponent,
  MenuComponent,
  MessageComponent
];
