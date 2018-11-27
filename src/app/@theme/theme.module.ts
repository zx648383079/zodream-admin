import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  TabBarComponent
} from './components';
import {
  AssetPipe
} from './pipes';
import { CategoryService, TransferStateService, AuthService } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TransferStateInterceptor, TokenInterceptor, ResponseInterceptor } from './interceptors';
import { AuthActions } from './actions';
import { ProductService } from './services/product.service';
import { AdService } from './services/ad.service';
// import {

// } from './layouts';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule
];

const COMPONENTS = [
  TabBarComponent
];

const PIPES = [
  AssetPipe
];

const SERVICES = [
  CategoryService,
  AuthService,
  ProductService,
  AdService
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
