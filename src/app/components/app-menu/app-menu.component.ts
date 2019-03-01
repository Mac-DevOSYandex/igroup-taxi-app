import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Events, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

@Component({
  selector: 'ig-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppMenuComponent implements OnInit {
  appPagesMenu = [
    {
      title: 'Welcome',
      url: '/app/tabs/welcome',
      icon: 'globe',
    },
    {
      title: 'Car Pool',
      url: '/app/tabs/carpool',
      icon: 'people',
    },
    {
      title: 'Taxi',
      url: '/app/tabs/speakers',
      icon: 'car',
    },
    {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map',
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle',
    },
  ];

  loggedIn = false;

  constructor(
    private events: Events,
    private menu: MenuController,
    private router: Router,
    private storage: Storage,
    private userData: UserData
  ) {}

  ngOnInit() {
    this.checkLoginStatus();
    this.listenForLoginEvents();
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  async logout() {
    await this.userData.logout();
    return this.router.navigateByUrl('/app/tabs/welcome');
  }

  // logout() {
  //   this.userData.logout().then(() => {
  //     return this.router.navigateByUrl('/app/tabs/welcome');
  //   });
  // }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
