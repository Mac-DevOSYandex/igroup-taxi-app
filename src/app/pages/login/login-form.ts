import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { Credentials } from '../../auth/models/user';
// import { UserOptions } from '../../interfaces/user-options';

const log = console.log;
@Component({
  selector: 'ig-login-form',
  templateUrl: 'login-form.html',
  styleUrls: ['./login-form.scss'],
})
export class LoginForm {
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

  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.loginForm.disable();
    } else {
      this.loginForm.enable();
    }
  }

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Credentials>();

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
        'igroup@ig-mail.com',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z0-9_.*-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.userData.login(this.loginForm.value.email && this.loginForm.value.password);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
    // log('email:', this.loginForm.value.email);
    // log('password:', this.loginForm.value.password);
  }

  // submit() {
  //   if (this.loginForm.valid) {
  //     this.submitted.emit(this.loginForm.value);
  //     log('submitted');
  //     this.router.navigateByUrl('/app/tabs/schedule');
  //   }
  // }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
/* This is a PRESENTATION component: i.e UI and UI display */