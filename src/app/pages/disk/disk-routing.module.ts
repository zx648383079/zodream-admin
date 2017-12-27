import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiskComponent } from './disk.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [{
  path: '',
  component: DiskComponent,
  children: [{
    path: 'list',
    component: ListComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DiskRoutingModule {

}

export const routedComponents = [
  DiskComponent,
  ListComponent
];
