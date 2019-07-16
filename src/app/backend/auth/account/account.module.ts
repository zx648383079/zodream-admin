import { NgModule } from '@angular/core';

import { AccountRoutingModule, accountRoutedComponents } from './account-routing.module';
import { ThemeModule } from 'src/app/@theme/theme.module';



@NgModule({
  declarations: [
    ... accountRoutedComponents,
  ],
  imports: [
    ThemeModule,
    AccountRoutingModule
  ],
})
export class AccountModule { }
