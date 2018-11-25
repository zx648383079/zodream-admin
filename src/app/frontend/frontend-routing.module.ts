import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontendComponent } from './frontend.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '',
  component: FrontendComponent,
  children: [{
    path: 'home',
    component: HomeComponent,
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
export class FrontendRoutingModule {
}
