import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MobileComponent } from './mobile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MemberComponent } from './member/member.component';
import { LoginComponent } from './member/login/login.component';
import { MobileResolver } from './mobile.resolver';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [{
  path: '',
  component: MobileComponent,
  children: [{
    path: 'home',
    component: HomeComponent,
    resolve: {
      cres: MobileResolver,
    }
  }, {
    path: 'category',
    component: CategoryComponent,
    resolve: {
      cres: MobileResolver,
    }
  }, {
    path: 'cart',
    component: CartComponent,
    resolve: {
      cres: MobileResolver,
    }
  }, {
    path: 'search',
    component: SearchComponent,
    resolve: {
      cres: MobileResolver,
    }
  }, {
    path: 'member',
    component: MemberComponent,
    resolve: {
      cres: MobileResolver,
    }
  }, {
    path: 'member/login',
    component: LoginComponent,
    resolve: {
      cres: MobileResolver,
    }
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
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class MobileRoutingModule {
}

export const routedComponents = [
  MobileComponent,
  NotFoundComponent,
  HomeComponent,
  SearchComponent,
  MemberComponent,
  LoginComponent,
  CategoryComponent,
  CartComponent
];
