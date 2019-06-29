import { AppState } from '../interfaces';
import { createSelector } from 'reselect';
import { AuthState } from './auth.state';
import { IUser } from '../models/user';

// Base state function
function getAuthState(state: AppState): AuthState {
    return state.auth;
}

// ******************** Individual selectors ***************************
const fetchAuthStatus = function (state: AuthState): boolean {
    return state.isAuthenticated;
};

const fetchCurrentUser = function (state: AuthState): IUser {
    return state.currentUser;
};


// *************************** PUBLIC API's ****************************
export const getAuthStatus = createSelector(getAuthState, fetchAuthStatus);
export const getCurrentUser = createSelector(getAuthState, fetchCurrentUser);
