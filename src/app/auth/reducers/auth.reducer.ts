import * as AuthActions from '../actions/auth.actions';
import { User } from '../models/user';

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

export function authReducer(state = initialState, action: AuthActions.AuthAction): AuthState {
  switch (action.type) {
    case AuthActions.AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        user: action.payload.user,
      };
    }

    case AuthActions.AuthActionTypes.Logout: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state: AuthState) => state.user;
