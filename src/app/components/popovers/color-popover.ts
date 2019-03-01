import { Component, ViewChildren, QueryList } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ThemeSettings } from '../../providers/theme/theme.service';

const themes = {
  igroup: {
    primary: '#870099',
    secondary: '#0f3b2c',
    tertiary: '#d45a29',
    light: '#ebe8e7',
    medium: '#f5c18a',
    dark: '#9b7d5d',
  },
  autumn: {
    primary: '#f78154',
    secondary: '#4d9078',
    tertiary: '#b4436c',
    light: '#fde8df',
    medium: '#fcd0a2',
    dark: '#b89876',
  },
  light: {
    primary: '#686769',
    secondary: '#b8b849',
    tertiary: '#9e807e',
    light: '#f7f7ff',
    medium: '#8fa2b1',
    dark: '#495867',
  },
  dark: {
    primary: '#e1e2e1',
    secondary: '#af984a',
    tertiary: '#a3997a',
    light: '#343435',
    medium: '#8a8c8f',
    dark: '#495867',
  },
  neon: {
    primary: '#393fbd',
    secondary: '#4ce0b3',
    tertiary: '#ff5e79',
    light: '#f4edf2',
    medium: '#b682a5',
    dark: '#34162a',
  },
};

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="changeTheme('igroup')">
        <ion-label>iGroup</ion-label>
      </ion-item>
      <ion-item button (click)="changeTheme('autumn')">
        <ion-label>Autumn</ion-label>
      </ion-item>
      <ion-item button (click)="changeTheme('dark')">
        <ion-label>Dark</ion-label>
      </ion-item>
      <ion-item button (click)="changeTheme('light')">
        <ion-label>Light</ion-label>
      </ion-item>
      <ion-item button (click)="changeTheme('neon')">
        <ion-label>Neon</ion-label>
      </ion-item>
    </ion-list>
  `,
})
export class ColorPopover {
  // @ViewChildren(ColorMenu) colorMenu: QueryList<ColorMenu>;

  constructor(public popoverCtrl: PopoverController, private theme: ThemeSettings) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }

  changeTheme(name: any) {
    this.theme.setTheme(themes[name]);
  }

  changeSpeed(val) {
    this.theme.setVariable('--speed', `${val}ms`);
  }
  ngOnInit() {}
}

// TODO: Color theme not persisting...
