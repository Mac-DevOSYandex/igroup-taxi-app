import { Component, Input } from '@angular/core';

import { PopoverController } from '@ionic/angular';
import { ColorPopover } from './color-popover';

import { UserData } from '../../providers/user-data';

// TODO: How to close popover after click
@Component({
  template: `
    <ion-list>
      <ion-item button routerLink="/login" (click)="dismiss()">
        <ion-icon slot="start" name="log-in"></ion-icon>
        <ion-label>Login</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://ionicframework.com/docs/v2')">
        <ion-icon slot="start" name="document"></ion-icon>
        <ion-label>Documentation</ion-label>
      </ion-item>
      <ion-item button (click)="presentColorPopover($event)" (click)="dismiss()">
        <ion-icon slot="start" name="color-palette"></ion-icon>
        <ion-label>Themes</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://github.com/Mac-DevOSYandex/igroup-taxi-app.git')">
        <ion-icon slot="start" name="logo-github"></ion-icon>
        <ion-label>GitHub Repo</ion-label>
      </ion-item>
      <ion-item button (click)="dismiss()">
        <ion-icon slot="start" name="exit"></ion-icon>
        <ion-label>Exit</ion-label>
      </ion-item>
    </ion-list>
  `,
})
export class MoreMenuPopover {
  constructor(public popoverCtrlr: PopoverController) {}

  dismiss() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrlr.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrlr.dismiss();
  }

  async presentColorPopover(event: Event) {
    const colorPopover = await this.popoverCtrlr.create({
      component: ColorPopover,
      event,
    });
    await colorPopover.present();
  }
}
