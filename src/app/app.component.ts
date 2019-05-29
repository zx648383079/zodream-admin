import { Component } from '@angular/core';
import { AuthService } from './@theme/services';

@Component({
  selector: 'zo-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(
    authService: AuthService
  ) {
    document.getElementById('zo-global-spinner').style.display = 'none';
    authService.loginFromStorage();
  }
}
