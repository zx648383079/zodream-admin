import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BackendComponent } from './backend.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';


const routes: Routes = [{
  path: '',
  component: BackendComponent,
  children: [{
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'activity',
    component: ActivityComponent,
  }, {
    path: 'goods',
    loadChildren: './goods/goods.module#GoodsModule',
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
