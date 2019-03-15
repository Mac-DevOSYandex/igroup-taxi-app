// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { empty, of } from 'rxjs';
// import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

// import * as fromAuth from '../actions/auth.actions';

// // import { MatDialog } from '@angular/material';
// // import { LogoutPromptComponent } from '@app/auth/components/logout-prompt.component';
// // import { AuthService } from '../../providers/auth/auth.service';
// import { UserData } from '../../providers/user-data';

// @Injectable()
// export class AuthEffects {
//   @Effect({ dispatch: false })
//   login$ = this._actions$.pipe(
//     ofType<fromAuth.Login>(fromAuth.AuthActionTypes.Login),
//     tap(() => {
//       return this._authService.login('auth');
//     })
//   );

//   @Effect()
//   loginComplete$ = this._actions$.pipe(
//     ofType<fromAuth.Login>(fromAuth.AuthActionTypes.LoginComplete),
//     exhaustMap(() => {
//       return this._authService.parseHash$().pipe(
//         map((authResult: any) => {
//           if (authResult && authResult.accessToken) {
//             this._authService.setAuth(authResult);
//             window.location.hash = '';
//             return new fromAuth.LoginSuccess();
//           }
//         }),
//         catchError(error => of(new fromAuth.LoginFailure(error)))
//       );
//     })
//   );

//   @Effect({ dispatch: false })
//   loginRedirect$ = this._actions$.pipe(
//     ofType<fromAuth.LoginSuccess>(fromAuth.AuthActionTypes.LoginSuccess),

//     tap(() => {
//       this._router.navigate([this._authService.authSuccessUrl]);
//     })
//   );

//   @Effect({ dispatch: false })
//   loginErrorRedirect$ = this._actions$.pipe(
//     ofType<fromAuth.LoginFailure>(fromAuth.AuthActionTypes.LoginFailure),

//     map(action => action.payload),
//     tap((err: any) => {
//       if (err.error_description) {
//         console.error(`Error: ${err.error_description}`);
//       } else {
//         console.error(`Error: ${JSON.stringify(err)}`);
//       }
//       this._router.navigate([this._authService.authFailureUrl]);
//     })
//   );

//   @Effect()
//   checkLogin$ = this._actions$.pipe(
//     ofType<fromAuth.CheckLogin>(fromAuth.AuthActionTypes.CheckLogin),
//     exhaustMap(() => {
//       if (this._authService.authenticated) {
//         return this._authService.checkSession$({}).pipe(
//           map((authResult: any) => {
//             if (authResult && authResult.accessToken) {
//               this._authService.setAuth(authResult);
//               return new fromAuth.LoginSuccess();
//             }
//           }),
//           catchError(error => {
//             this._authService.resetAuthFlag();
//             return of(new fromAuth.LoginFailure({ error }));
//           })
//         );
//       } else {
//         return empty();
//       }
//     })
//   );

//   // @Effect()
//   // logoutConfirmation$ = this._actions$.ofType<fromAuth.Logout>(fromAuth.AuthActionTypes.Logout).pipe(
//   //   exhaustMap(() =>
//   //     this.dialogService
//   //       .open(LogoutPromptComponent)
//   //       .afterClosed()
//   //       .pipe(
//   //         map(confirmed => {
//   //           if (confirmed) {
//   //             return new fromAuth.LogoutConfirmed();
//   //           } else {
//   //             return new fromAuth.LogoutCancelled();
//   //           }
//   //         })
//   //       )
//   //   )
//   // );

//   @Effect({ dispatch: false })
//   logout$ = this._actions$.pipe(
//     ofType<fromAuth.LogoutConfirmed>(fromAuth.AuthActionTypes.LogoutConfirmed),
//     tap(() => this._authService.logout())
//   );

//   constructor(private _actions$: Actions, private _authService: UserData, private _router: Router) {}
// }
