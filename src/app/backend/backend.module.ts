import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend.component';
import { BackendRoutingModule } from './backend-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    BackendRoutingModule
  ],
  declarations: [BackendComponent, NotFoundComponent, HomeComponent]
})
export class BackendModule { }
