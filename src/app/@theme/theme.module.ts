import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  TabBarComponent,
  MenuItemComponent,
  MenuComponent,
  HeaderComponent,
  FooterComponent
} from './components';
import {
  AssetPipe
} from './pipes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  TransferStateInterceptor,
  TokenInterceptor,
  ResponseInterceptor
} from './interceptors';
import { AuthActions } from './actions';
import {
  AdService,
  ProductService,
  CategoryService,
  TransferStateService,
  AuthService,
  ThemeService
} from './services';
import {
  DarkComponent
} from './layouts';
import { StateService } from './services/state.service';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule
];

const COMPONENTS = [
  TabBarComponent,
  MenuComponent,
  MenuItemComponent,
  DarkComponent,
  HeaderComponent,
  FooterComponent
];

const PIPES = [
  AssetPipe
];

const SERVICES = [
  CategoryService,
  AuthService,
  ProductService,
  AdService,
  ThemeService,
  StateService
];

const ACTIONS = [
  AuthActions
];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
  providers: [
    ...SERVICES,
    ...ACTIONS,
    {provide: HTTP_INTERCEPTORS, useClass: TransferStateInterceptor, multi: true},
    TransferStateService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  ],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule
    };
  }
}
