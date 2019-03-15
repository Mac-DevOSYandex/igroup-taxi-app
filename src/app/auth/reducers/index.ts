import * as AuthActions from '@ig/auth/actions/auth.actions';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '@state/index';
import * as fromLoginPage from './login-page.reducer';
import * as fromAuth from './auth.reducer';

export interface AuthState {
    status: fromAuth.AuthState;
    loginPage: fromLoginPage.State;
}

export interface State extends fromRoot.AppState {
    auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AuthState, AuthActions.AuthAction> = {
    status: fromAuth.authReducer,
    loginPage: fromLoginPage.reducer,
};

// Feature selectors get registered first.
export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

// Then you can use that feature selector to get current user status state.
export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state: AuthState) => state.status
);

// Then you can use that feature selector to select a piece of state.
export const getUser = createSelector(
    selectAuthStatusState,
    fromAuth.getUser
);
export const getLoggedIn = createSelector(
    getUser,
    user => !!user
);

export const selectLoginPageState = createSelector(
    selectAuthState,
    (state: AuthState) => state.loginPage
);
export const getLoginPageError = createSelector(
    selectLoginPageState,
    fromLoginPage.getError
);
export const getLoginPagePending = createSelector(
    selectLoginPageState,
    fromLoginPage.getPending
);
