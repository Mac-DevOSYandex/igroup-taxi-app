import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { LoginForm } from './login-form';
// import { LoginPage } from './login-page';
// import { GoogleLoginComponent } from '../../components/google-login/google-login.component';

const LOGIN = [
  LoginForm, //
  // GoogleLoginComponent,
  // LoginPage,
];

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginForm,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, //
    RouterModule.forChild(loginRoutes),
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [...LOGIN],
  exports: [RouterModule, ...LOGIN],
})
export class LoginModule {}
