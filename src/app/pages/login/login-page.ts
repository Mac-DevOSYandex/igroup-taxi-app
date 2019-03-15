// import { Component, OnInit } from '@angular/core';
// import { Store, select } from '@ngrx/store';
// import { Credentials } from '../../auth/models/user';
// import * as fromAuth from '../../auth/reducers';
// import { LoginPageActions } from '../../auth/actions';

// @Component({
//   selector: 'ig-login-page',
//   template: `
//     <ig-login-form (submitted)="onSubmit($event)" [pending]="pending$ | async" [errorMessage]="error$ | async">
//     </ig-login-form>
//   `,
//   styles: [],
// })
// export class LoginPage implements OnInit {
//   pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
//   error$ = this.store.pipe(select(fromAuth.getLoginPageError));

//   constructor(private store: Store<fromAuth.State>) {}

//   ngOnInit() {}

//   onSubmit(credentials: Credentials) {
//     this.store.dispatch(new LoginPageActions.Login({ credentials }));
//   }
// }

// /* This is a CONTAINER component: i.e logic interacting w/ the STORE */
