import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiskComponent } from './disk.component';
import { ListComponent } from './list/list.component';
import { DiskRoutingModule, routedComponents } from './disk-routing.module';
import { ThemeModule } from '../../@theme/index';
import { HttpClientModule } from '@angular/common/http';
import { OrderByPipe, TimeAgoPipe, SizePipe, StatusPipe } from '../../@theme/pipes/index';

@NgModule({
  imports: [
    ThemeModule,
    DiskRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ...routedComponents,
    OrderByPipe,
    TimeAgoPipe,
    SizePipe,
    StatusPipe
  ],
  providers: [
  ]
})
export class DiskModule { }
