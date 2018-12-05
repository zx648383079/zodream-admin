import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StateService } from '../@theme/services';
@Injectable()
export class MobileResolver implements Resolve<any> {
    constructor(private state: StateService) {

    }
    resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot) {
        const data = ['home', 'category', 'cart', 'member'],
            i = data.indexOf(route.routeConfig.path);
        this.state.setModeState(i >= 0);
        if (i >= 0) {
            this.state.setNavState(i);
        }
    }

}
