import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';

const log = console.log;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  error_messages = {
    email: [
      { type: 'required', message: 'Email Required.' },
      { type: 'minLength', message: 'Email minimum length 8.' },
      { type: 'maxLength', message: 'Email minimum length 50' },
      { type: 'pattern', message: 'Please Enter a Valid email' },
    ],
    password: [
      { type: 'required', message: 'Password Required.' },
      { type: 'minLength', message: 'Password minimum length 6.' },
      { type: 'maxLength', message: 'Password minimum length 30' },
      { type: 'pattern', message: 'Must contain numeric, uppercase & lowercase charearcter' },
    ],
  };

  constructor(
    public userData: UserData, //
    public router: Router,
    public fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z0-9_.*-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
    });
  }

  onLogin(form: FormGroup) {
    if (form.valid) {
      this.userData.login(this.loginForm.value.email && this.loginForm.value.password);
      this.router.navigateByUrl('/app/tabs/welcome');
    }
    // log('email:', this.loginForm.value.email);
    // log('password:', this.loginForm.value.password);
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
