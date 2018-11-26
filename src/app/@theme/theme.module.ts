import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { RouterModule } from '@angular/router';

// import {

// } from './components';
// import {

// } from './pipes';
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

];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule
    };
  }
}
