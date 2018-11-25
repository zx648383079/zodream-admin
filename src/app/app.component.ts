import { Component } from '@angular/core';

@Component({
  selector: 'zo-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor() {
    document.getElementById('zo-global-spinner').style.display = 'none';
  }
}
