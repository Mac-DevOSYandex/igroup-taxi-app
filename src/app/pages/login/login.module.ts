import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from './login';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginPage,
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
  declarations: [LoginPage],
  exports: [RouterModule],
})
export class LoginModule {}
