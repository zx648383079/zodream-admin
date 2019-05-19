import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService, AuthService } from 'src/app/@theme/services';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/@theme/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthActions } from 'src/app/@theme/actions';
import { tap } from 'rxjs/operators';
import { getAuthStatus } from 'src/app/@theme/reducers/selectors';

@Component({
  selector: 'zo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mode = 0;
  loginSubs: Subscription;
  returnUrl: string;
  input = {
    email: '',
    password: ''
  };

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private actions: AuthActions,
    private authService: AuthService) {
      this.redirectIfUserLoggedIn();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  tapMode(i: number) {
    this.mode = i;
  }

  tapSignIn() {
    this.loginSubs = this.authService
        .login({
          email: this.input.email,
          password: this.input.password
        }).pipe(
          tap(user => {
            //this.router.navigateByUrl(this.returnUrl)
          }, (user) => {
            const errors = user.error.error || 'Something went wrong';
            // keys.forEach(val => {
            //   this.pushErrorFor(val, errors);
            // });
          })).subscribe();
  }


  private pushErrorFor(ctrl_name: string, msg: string) {
    //this.signInForm.controls[ctrl_name].setErrors({ 'msg': msg });
  }


  redirectIfUserLoggedIn() {
    this.store.select(getAuthStatus).subscribe(
      data => {
        if (data === true) {
          this.router.navigateByUrl(this.returnUrl);
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.loginSubs) { this.loginSubs.unsubscribe(); }
  }

}
