import { of as observableOf, Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { AppState } from '../interfaces';
import { Store } from '@ngrx/store';
import { AuthService as OauthService } from 'ng2-ui-auth';
import { AuthActions } from '../actions/auth.actions';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http/src/request';
import { ToastrService, ActiveToast } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';
import { User } from '../models/user';


@Injectable()
export class AuthService {
  /**
   * Creates an instance of AuthService.
   * @param HttpService http
   * @param AuthActions actions
   * @param Store<AppState> store
   */
  constructor(
    private http: HttpClient,
    private actions: AuthActions,
    private store: Store<AppState>,
    private toastrService: ToastrService,
    private oAuthService: OauthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  /**
   *
   *
   * @param Authenticate //{email: string, password: string }
   * @returns Observable<User>
   */

  login({ email, password }): Observable<User> {
    const params = { data: { attributes: { 'email': email, 'password': password } } };
    return this.http.post<User>('api/v1/login', params).pipe(
      map(user => {
        this.setTokenInLocalStorage(user, 'user');
        this.store.dispatch(this.actions.getCurrentUserSuccess(JSON.parse(localStorage.getItem('user'))));
        this.store.dispatch(this.actions.loginSuccess());
        return user;
      }),
      tap(
        _ => this.router.navigate(['/']),
        error => this.toastrService.error(error.error.errors.detail, 'ERROR!')
      ),
      catchError(error => {
        return observableOf(error);
      })
    );
  }

  /**
   *
   *
   * @param User data
   * @returns Observable<User>
   *
   */
  register(data: User): Observable<User> {
    const params = { data: { type: 'user', attributes: data } };
    return this.http.post<User>('api/v1/register', params).pipe(
      map(user => {
        return user;
      }),
      tap(
        _ => {
          this.toastrService.success('You are successfully registerd!', 'Success!!');
          this.router.navigate(['auth', 'login']);
        },
        _ => this.toastrService.error('Invalid/Existing data', 'ERROR!!')
      )
    );
  }

  /**
   *
   *
   * @param anyUser data
   * @returns Observable<any>
   */
  forgetPassword(data: User): Observable<any> {
    return this.http.post('auth/passwords', { spree_user: data }).pipe(
      map(_ =>
        this.toastrService.success(
          'Password reset link has be sent to your email.',
          'Success'
        )
      ),
      tap(
        _ => _,
        _ => this.toastrService.error('Not a valid email/user', 'ERROR!!')
      )
    );
  }

  /**
   *
   *
   * @param User data
   * @returns Observable<any>
   */
  updatePassword(data: User): Observable<void | ActiveToast<any>> {
    return this.http
      .put(`auth/passwords/${data.id}`, { spree_user: data })
      .pipe(
        map(_ =>
          this.toastrService.success(
            'Password updated success fully!',
            'Success'
          )
        ),
        tap(
          _ => _,
          _ => this.toastrService.error('Unable to update password', 'ERROR!')
        )
      );
  }

  /**
   *
   *
   * @returns Observable<any>
   *
   */
  authorized(): Observable<any> {
    return this.http
      .get('api/v1/authenticated')
      .pipe(catchError(error => of(error.error)));
  }

  /**
   *
   *
   */
  logout() {
    return this.http.post('api/v1/logout', {}).pipe(
      map((res: Response) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.clear();
        }
        this.store.dispatch(this.actions.logoutSuccess());
        return res;
      })
    );
  }

  /**
   *
   *
   * @returns HttpHeaders
   */
  getTokenHeader(request: HttpRequest<any>): HttpHeaders {
    if (this.getUserToken()) {
      return new HttpHeaders({
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${this.getUserToken()}`,
        'Accept': '*/*'
      });
    } else {
      return new HttpHeaders({
        'Content-Type': 'application/vnd.api+json',
        'Accept': '*/*'
      });
    }

  }

  /**
   *
   *
   * @param any user_data
   *
   */
  private setTokenInLocalStorage(user_data: any, keyName: string): void {
    const jsonData = JSON.stringify(user_data);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(keyName, jsonData);
    }
  }

  /**
   *
   *
   * @param string provider
   */
  socialLogin(provider: string) {
    return this.oAuthService.authenticate<User>(provider).pipe(
      map(user => {
        this.setTokenInLocalStorage(user, 'user');
        return user;
      }),
      catchError(_ => {
        this.toastrService.error('Social login failed', 'ERROR!');
        return observableOf('Social login failed');
      })
    );
  }

  getUserToken() {
    if (isPlatformBrowser(this.platformId)) {
      const user: User = JSON.parse(localStorage.getItem('user'));
      return user ? user.token : null;
    } else {
      return null;
    }
  }

}
