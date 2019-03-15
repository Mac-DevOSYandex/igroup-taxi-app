import { PayloadAction } from '@state/models/app.model';
// import { Credentials } from '../models/user';

export enum LoginPageActionTypes {
    Login = '[Login Page] Login',
}

export class Login extends PayloadAction {
    readonly type = LoginPageActionTypes.Login;

    // constructor(public payload: { credentials: Credentials }) {}
}

export type LoginPageAction = Login;
