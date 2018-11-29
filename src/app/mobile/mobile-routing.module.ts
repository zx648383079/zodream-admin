import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MobileComponent } from './mobile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search/search-result/search-result.component';


const routes: Routes = [{
  path: '',
  component: MobileComponent,
  children: [{
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'search',
    component: SearchComponent,
  }, {
    path: 'search-result',
    component: SearchResultComponent,
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileRoutingModule {
}

export const routedComponents = [
  MobileComponent,
  NotFoundComponent,
  HomeComponent,
  SearchComponent,
  SearchResultComponent
];
