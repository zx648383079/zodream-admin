import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CanActivateViaAuthGuard } from './@theme/guards';

const routes: Routes = [
  { path: 'backend',
    canActivate: [CanActivateViaAuthGuard],
    loadChildren: './backend/backend.module#BackendModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'backend', pathMatch: 'full' },
  { path: '**', redirectTo: 'backend' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
