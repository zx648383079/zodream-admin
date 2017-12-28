import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiskComponent } from './disk.component';
import { ListComponent } from './list/list.component';
import { DiskRoutingModule, routedComponents } from './disk-routing.module';
import { ThemeModule } from '../../@theme/index';
import { HttpClientModule } from '@angular/common/http';
import { OrderByPipe, SizePipe, StatusPipe } from '../../@theme/pipes/index';
import { DiskService } from './disk.service';

@NgModule({
  imports: [
    ThemeModule,
    DiskRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ...routedComponents,
    OrderByPipe,
    SizePipe,
    StatusPipe
  ],
  providers: [
    DiskService
  ]
})
export class DiskModule { }
