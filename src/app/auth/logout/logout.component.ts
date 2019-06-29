import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@theme/services';

@Component({
  selector: 'zo-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.authService.logout().subscribe(res => {
      this.router.navigateByUrl('./login');
    });
  }

  ngOnInit() {
  }

}
