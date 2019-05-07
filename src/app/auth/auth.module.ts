import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    AuthRoutingModule,
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent]
})
export class AuthModule { }
