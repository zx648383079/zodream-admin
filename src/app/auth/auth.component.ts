import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zo-auth',
  template: `
  <section class="container login-page">
    <router-outlet></router-outlet>
  </section>
`,
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
