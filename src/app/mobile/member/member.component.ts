import { Component, OnInit } from '@angular/core';
import { UserService, AuthService } from 'src/app/@theme/services';
import { IUser } from 'src/app/@theme/models/user';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/@theme/interfaces';
import { getAuthStatus } from 'src/app/@theme/reducers/selectors';

@Component({
  selector: 'zo-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {


  user: IUser;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private userService: UserService) {
      this.store.select(getAuthStatus).subscribe(
        data => {
          if (data === true) {
            this.userService.profile().subscribe(res => {
              this.user = res;
            });
          }
        }
      );
  }

  ngOnInit() {
  }

  tapLogout() {
    this.authService.logout();
  }

}
