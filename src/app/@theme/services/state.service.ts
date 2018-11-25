import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StateService {

    protected navStateSource = new BehaviorSubject<number>(0);

    protected modeStateSource = new BehaviorSubject<boolean>(true);

    public navState$ = this.navStateSource.asObservable();

    public modeState$ = this.modeStateSource.asObservable();

    /**
     * setNavState
     */
    public setNavState(index: number) {
        this.navStateSource.next(index);
    }

    /**
     * setModeState
     */
    public setModeState(mode: boolean) {
        this.modeStateSource.next(mode);
    }
}
