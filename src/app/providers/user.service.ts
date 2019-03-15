// import { Injectable } from '@angular/core';
// import { Events } from '@ionic/angular';
// import { Credentials, User } from '@ig/auth/models/user';
// import { Observable, throwError, of, from } from 'rxjs';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserData {
//   _favorites: string[] = [];
//   HAS_LOGGED_IN = 'hasLoggedIn';
//   HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

//   constructor(public events: Events, public storage: NativeStorage) {}

//   hasFavorite(sessionName: string): boolean {
//     return this._favorites.indexOf(sessionName) > -1;
//   }

//   addFavorite(sessionName: string): void {
//     this._favorites.push(sessionName);
//   }

//   removeFavorite(sessionName: string): void {
//     const index = this._favorites.indexOf(sessionName);
//     if (index > -1) {
//       this._favorites.splice(index, 1);
//     }
//   }

//   login({ username, password }: Credentials): Observable<User> {
//     if (username !== 'igroup@ig-mail.com' && password !== 'Passw0rd') {
//       return throwError('Invalid username or password');
//     }
//     return of({ name: 'User' });
//   }

//   // login(username: string): Promise<any> {
//   //   return this.storage.setItem(this.HAS_LOGGED_IN, true).then(() => {
//   //     this.setUsername(username);
//   //     return this.events.publish('user:login');
//   //   });
//   // }

//   // async signup(username: string): Promise<any> {
//   //   return await this.storage.setItem(this.HAS_LOGGED_IN, true).then(() => {
//   //     this.setUsername(username);
//   //     return this.events.publish('user:signup');
//   //   });
//   // }
//   signup(username: string): Observable<any> {
//     return from(
//       this.storage.setItem(this.HAS_LOGGED_IN, true).then(() => {
//         this.setUsername(username);
//         return this.events.publish('user:signup');
//       })
//     );
//   }

//   logout(): Promise<any> {
//     return this.storage
//       .remove(this.HAS_LOGGED_IN)
//       .then(() => {
//         return this.storage.remove('username');
//       })
//       .then(() => {
//         this.events.publish('user:logout');
//       });
//   }

//   setUsername(username: string): Promise<any> {
//     return this.storage.setItem('username', username);
//   }

//   getUsername(): Promise<string> {
//     return this.storage.getItem('username').then(value => {
//       return value;
//     });
//   }

//   isLoggedIn(): Promise<boolean> {
//     return this.storage.getItem(this.HAS_LOGGED_IN).then(value => {
//       return value === true;
//     });
//   }

//   checkHasSeenTutorial(): Promise<string> {
//     return this.storage.getItem(this.HAS_SEEN_TUTORIAL).then(value => {
//       return value;
//     });
//   }
// }
