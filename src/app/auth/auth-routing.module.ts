import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [{
      path: 'login',
      component: LoginComponent,
    }, {
      path: 'register',
      component: RegisterComponent,
    }, {
    //   path: 'ui-features',
    //   loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
    // },  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    }, {
      path: '**',
      component: LoginComponent,
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
