import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  { path: 'frontend', loadChildren: './frontend/frontend.module#FrontendModule' },
  { path: 'backend', loadChildren: './backend/backend.module#BackendModule' },
  { path: 'mobile', loadChildren: './mobile/mobile.module#MobileModule' },
  { path: '', redirectTo: 'mobile', pathMatch: 'full' },
  { path: '**', redirectTo: 'frontend' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
