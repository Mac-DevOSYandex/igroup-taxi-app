import { Component, OnInit } from '@angular/core';
import { ThemeSettings } from '../../providers/theme/theme.service';
// import { BehaviorSubject } from 'rxjs';

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
  dark: {
    primary: '#686769',
    secondary: '#b8b849',
    tertiary: '#9e807e',
    light: '#f7f7ff',
    medium: '#8fa2b1',
    dark: '#495867',
  },
  light: {
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
  selector: 'ig-color-menu',
  templateUrl: './color-menu.component.html',
  styleUrls: ['./color-menu.component.scss'],
})
export class ColorMenu implements OnInit {
  // private name: BehaviorSubject<string>;

  constructor(private theme: ThemeSettings) {
    // this.name = new BehaviorSubject('igroup');
  }

  changeTheme(name: any) {
    this.theme.setTheme(themes[name]);
  }

  changeSpeed(val) {
    this.theme.setVariable('--speed', `${val}ms`);
  }
  ngOnInit() {}
}
