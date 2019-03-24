import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  { path: 'backend', loadChildren: './backend/backend.module#BackendModule' },
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
