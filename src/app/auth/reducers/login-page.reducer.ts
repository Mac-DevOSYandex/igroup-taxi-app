import * as LoginPageActions from '../actions/login-page.actions';
import * as AuthActions from '../actions/auth.actions';

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false,
};

export const reducer = (
  state = initialState,
  action: AuthActions.AuthAction | LoginPageActions.LoginPageAction
): State => {
  switch (action.type) {
    case LoginPageActions.LoginPageActionTypes.Login: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    case AuthActions.AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        error: null,
        pending: false,
      };
    }

    case AuthActions.AuthActionTypes.LoginFailure: {
      return {
        ...state,
        error: action.payload.error,
        pending: false,
      };
    }

    default: {
      return state;
    }
  }
};

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
