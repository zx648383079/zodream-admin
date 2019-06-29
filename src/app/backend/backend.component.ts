import { Component } from '@angular/core';
import { MENU_ITEMS } from './backend-menu';
import { IUser } from '../@theme/models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../@theme/interfaces';
import { getCurrentUser } from '../@theme/reducers/selectors';
import { AUTH_DOWN_MENU } from './auth/auth-routes.routing';

@Component({
  selector: 'zo-backend',
  template: `
  <zo-dark-layout [menus]="menu" [user]="user" [userMenus]="userMenu">
    <router-outlet></router-outlet>
  </zo-dark-layout>
`,
})
export class BackendComponent {

    public menu = MENU_ITEMS;
    public user: IUser;
    public userMenu = AUTH_DOWN_MENU;

    /**
     *
     */
    constructor(
        private store: Store<AppState>
    ) {
        this.store.select(getCurrentUser).subscribe(user => {
            this.user = user;
        });
    }
}
