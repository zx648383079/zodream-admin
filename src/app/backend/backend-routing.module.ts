import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BackendComponent } from './backend.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { shopRoutes } from './shop/shop-routes.routing';
import { authRoutes } from './auth/auth-routes.routing';


const routes: Routes = [{
  path: '',
  component: BackendComponent,
  children: [{
    path: 'home',
    component: HomeComponent,
  },
  ...authRoutes,
  ...shopRoutes,
  {
    path: 'system',
    loadChildren: './system/system.module#SystemModule',
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
export class BackendRoutingModule {
}
