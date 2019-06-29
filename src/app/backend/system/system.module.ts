import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { SystemRoutingModule, systemRoutedComponents } from './system-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    SystemRoutingModule
  ],
  declarations: [
    ...systemRoutedComponents
  ]
})
export class SystemModule { }
