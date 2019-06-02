import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  TabBarComponent,
  MenuItemComponent,
  MenuComponent,
  PagerComponent,
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
  ThemeService,
  SearchService,
  StateService,
  UserService
} from './services';
import {
  DarkComponent
} from './layouts';
import {
  InfiniteScrollDirective
} from './directives';
import { CanActivateViaAuthGuard } from './guards';
import { CartService } from './services/cart.service';
import { PricePipe } from './pipes/price.pipe';

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
  PagerComponent,
];

const PIPES = [
  AssetPipe,
  PricePipe
];

const SERVICES = [
  CategoryService,
  AuthService,
  ProductService,
  AdService,
  ThemeService,
  StateService,
  SearchService,
  UserService,
  CartService
];

const ACTIONS = [
  AuthActions
];

const DIRECTIVES = [
  InfiniteScrollDirective
];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS, ...PIPES, ...DIRECTIVES],
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  providers: [
    ...SERVICES,
    ...ACTIONS,
    {provide: HTTP_INTERCEPTORS, useClass: TransferStateInterceptor, multi: true},
    TransferStateService,
    CanActivateViaAuthGuard,
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
