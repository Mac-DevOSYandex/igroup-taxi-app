import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import * as fromAuth from '../auth/reducers/auth.reducer';

/**
 * storeFreeze prevents state from being mutated.
 * To be used in development only. See below!
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Each reducer is treated as a table in a database. Thus, top level
 * state interface is just a map of keys to inner state types.
 */
export interface AppState {
    // auth: fromAuth.AuthState;
    router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: fromRouter.routerReducer,
    // auth: fromAuth.authReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return (state: AppState, action: any): any => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('prev state', state);
        console.log('action', action);
        console.log('next state', result);
        console.groupEnd();

        return result;
    };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger, storeFreeze] : [];
