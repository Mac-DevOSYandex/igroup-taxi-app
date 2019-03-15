import { PayloadAction } from '@state/models/app.model';

export enum AuthActionTypes {
    Login = '[Login Page] Call Login',
    LoginComplete = '[Login Page] Login Complete',
    LoginSuccess = '[Auth API] Login Success',
    LoginFailure = '[Auth API] Login Failure',
    CheckLogin = '[Auth] Check Login',
    Logout = '[Auth] Call Logout',
    LogoutCancelled = '[Auth] Logout Dismissed',
    LogoutConfirmed = '[Auth] Logout Confirmed',
}

export class Login extends PayloadAction {
    readonly type = AuthActionTypes.Login;
}

export class LoginComplete extends PayloadAction {
    readonly type = AuthActionTypes.LoginComplete;
}

export class LoginSuccess extends PayloadAction {
    readonly type = AuthActionTypes.LoginSuccess;
}

export class LoginFailure extends PayloadAction {
    readonly type = AuthActionTypes.LoginFailure;

    // constructor(public payload: any) {}
}

export class CheckLogin extends PayloadAction {
    readonly type = AuthActionTypes.CheckLogin;
}

export class Logout extends PayloadAction {
    readonly type = AuthActionTypes.Logout;
}

export class LogoutConfirmed extends PayloadAction {
    readonly type = AuthActionTypes.LogoutConfirmed;
}

export class LogoutCancelled extends PayloadAction {
    readonly type = AuthActionTypes.LogoutCancelled;
}

export type AuthAction =
    | Login
    | LoginComplete
    | LoginSuccess
    | LoginFailure
    | CheckLogin
    | Logout
    | LogoutCancelled
    | LogoutConfirmed;
