// import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase/app';
// import { AngularFireAuth } from '@angulre/fire';

// import { GooglePlus } from '@ionic-native/google-plus';
// import { Platform } from '@ionic/angular';
// import { Observable } from 'rxjs';

// const log = console.log;

// @Component({
//   selector: 'ig-google-login',
//   templateUrl: './google-login.component.html',
//   styleUrls: ['./google-login.component.scss'],
// })
// export class GoogleLoginComponent implements OnInit {
//   user: Observable<firebase.User>;
//   constructor(
//     private afAuth: AngularFireAuth, //
//     private gplus: GooglePlus, //
//     private platform: Platform //
//   ) {
//     this.user = this.afAuth.authState;
//   }

//   googleLogin() {
//     if (this.platform.is('cordova')) {
//       // If it's a mobile device use native device
//       this.nativeGoogleLogin();
//     } else {
//       // use normal web login
//       this.webGoogleLogin();
//     }
//   }
//   // TODO: find webClientId; google-plus; Ionic(vid: Ionic Google Login for ios and android: by Jeff )
//   async nativeGoogleLogin(): Promise<void> {
//     //
//     try {
//       const gplusUser = await this.gplus.login({
//         webClientId: 'Insert-webClientId',
//         offline: true,
//         scope: 'profile email',
//       });
//       return this.afAuth.auth.SingInWithCredential(firebase.auth.GoogleAtuhProvider.credential(gplusUser.idToken));
//     } catch (err) {
//       log(err);
//     }
//   }

//   async webGoogleLogin(): Promise<void> {
//     // try catch bloc why?
//     try {
//       const provider = new firebase.auth.GoogleAtuhProvider();
//       const credential = await this.afAuth.auth.SingInWithPopup(provider);
//     } catch (err) {
//       log(err);
//     }
//   }

//   signOut() {
//     this.afAuth.auth.signOut();
//     // if mobile platform use googleplus method.
//     if (this.platform.is('cordova')) {
//       //
//       this.gplus.logout();
//     }
//   }

//   ngOnInit() {}
// }
