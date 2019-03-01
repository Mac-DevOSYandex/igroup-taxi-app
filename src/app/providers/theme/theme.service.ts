import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as Color from 'color';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const defaults = {
  primary: '#3880ff',
  secondary: '#0cd1e8',
  tertiary: '#7044ff;',
  success: '#10dc60',
  warning: '#ffce00',
  danger: '#f04141',
  dark: '#222428',
  medium: '#989aa2',
  light: '#f4f5f8',
};

// helper function()
const contrast = (color, ratio = 0.8) => {
  color = Color(color);
  return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
};

const CssTextGeneratorColor = colors => {
  colors = { ...defaults, ...colors };

  const { primary, secondary, tertiary, success, warning, danger, dark, medium, light } = colors;
  const shadeRatio = 0.1;
  const tintRatio = 0.1;

  return `
        /** base **/
        --ion-color-base: ${light};
        --ion-color-contrast: ${dark};
        --ion-background-color: ${light};
        --ion-text-color: ${dark};
        --ion-toolbar-background-color: ${contrast(light, 0.1)};
        --ion-toolbar-text-color: ${contrast(light, 0.1)};
        --ion-item-background-color: ${contrast(light, 0.3)};
        --ion-item-text-color: ${contrast(light, 0.3)};

        /** primary **/
        --ion-color-primary: ${primary}
        --ion-color-primary-rgb: 56, 128, 255;
        --ion-color-primary-contrast: ${contrast(primary)};
        --ion-color-primary-contrast-rgb: 255, 255, 255;
        --ion-color-primary-shade: ${Color(primary).darken(shadeRatio)};
        --ion-color-primary-tint: ${Color(primary).lighten(tintRatio)};

        /** secondary **/
        --ion-color-secondary: ${secondary}
        --ion-color-secondary-rgb: 56, 128, 255;
        --ion-color-secondary-contrast: ${contrast(secondary)};
        --ion-color-secondary-contrast-rgb: 255, 255, 255;
        --ion-color-secondary-shade: ${Color(secondary).darken(shadeRatio)};
        --ion-color-secondary-tint: ${Color(secondary).lighten(tintRatio)};

        /** tertiary **/
        --ion-color-tertiary: ${tertiary}
        --ion-color-tertiary-rgb: 56, 128, 255;
        --ion-color-tertiary-contrast: ${contrast(tertiary)};
        --ion-color-tertiary-contrast-rgb: 255, 255, 255;
        --ion-color-tertiary-shade: ${Color(tertiary).darken(shadeRatio)};
        --ion-color-tertiary-tint: ${Color(tertiary).lighten(tintRatio)};

        /** success **/
        --ion-color-success: ${success}
        --ion-color-success-rgb: 56, 128, 255;
        --ion-color-success-contrast: ${contrast(success)};
        --ion-color-success-contrast-rgb: 255, 255, 255;
        --ion-color-success-shade: ${Color(success).darken(shadeRatio)};
        --ion-color-success-tint: ${Color(success).lighten(tintRatio)};

        /** warning **/
        --ion-color-warning: ${warning}
        --ion-color-warning-rgb: 56, 128, 255;
        --ion-color-warning-contrast: ${contrast(warning)};
        --ion-color-warning-contrast-rgb: 255, 255, 255;
        --ion-color-warning-shade: ${Color(warning).darken(shadeRatio)};
        --ion-color-warning-tint: ${Color(warning).lighten(tintRatio)};

        /** danger **/
        --ion-color-danger: ${danger}
        --ion-color-danger-rgb: 56, 128, 255;
        --ion-color-danger-contrast: ${contrast(danger)};
        --ion-color-danger-contrast-rgb: 255, 255, 255;
        --ion-color-danger-shade: ${Color(danger).darken(shadeRatio)};
        --ion-color-danger-tint: ${Color(danger).lighten(tintRatio)};

        /** dark **/
        --ion-color-dark: ${dark}
        --ion-color-dark-rgb: 56, 128, 255;
        --ion-color-dark-contrast: ${contrast(dark)};
        --ion-color-dark-contrast-rgb: 255, 255, 255;
        --ion-color-dark-shade: ${Color(dark).darken(shadeRatio)};
        --ion-color-dark-tint: ${Color(dark).lighten(tintRatio)};

        /** medium **/
        --ion-color-medium: ${medium}
        --ion-color-medium-rgb: 56, 128, 255;
        --ion-color-medium-contrast: ${contrast(medium)};
        --ion-color-medium-contrast-rgb: 255, 255, 255;
        --ion-color-medium-shade: ${Color(medium).darken(shadeRatio)};
        --ion-color-medium-tint: ${Color(medium).lighten(tintRatio)};

        /** medium **/
        --ion-color-medium: ${medium}
        --ion-color-medium-rgb: 56, 128, 255;
        --ion-color-medium-contrast: ${contrast(medium)};
        --ion-color-medium-contrast-rgb: 255, 255, 255;
        --ion-color-medium-shade: ${Color(medium).darken(shadeRatio)};
        --ion-color-medium-tint: ${Color(medium).lighten(tintRatio)};

        /** light **/
        --ion-color-light: ${light}
        --ion-color-light-rgb: 56, 128, 255;
        --ion-color-light-contrast: ${contrast(light)};
        --ion-color-light-contrast-rgb: 255, 255, 255;
        --ion-color-light-shade: ${Color(light).darken(shadeRatio)};
        --ion-color-light-tint: ${Color(light).lighten(tintRatio)};
    `;
};

@Injectable({
  providedIn: 'root',
})
export class ThemeSettings {
  constructor(@Inject(DOCUMENT) private _document: Document, private storage: Storage) {
    this.storage.get('theme').then(cssText => {
      this.setGlobalCss(cssText);
    });
  }

  // Override global variables theme with a new theme
  setTheme(theme: string) {
    const cssText = CssTextGeneratorColor(theme);
    this.setGlobalCss(cssText);
    this.storage.set('theme', cssText);
  }

  // Define a single css variable
  setVariable(name: any, value: any) {
    this._document.documentElement.style.setProperty(name, value);
  }

  setGlobalCss(css: string) {
    this._document.documentElement.style.cssText = css;
  }
}

/* Jeff Delaney @angularfirebase or @fireship*/

// helper fn()
// function contrast(color, ratio = 0.8) {
//     color = Color(color);
//     return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
// }

// // helper function()
// const contrast = (color, ratio = 0.8) => {
//     color = Color(color);
//     return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
// };

// // function CssTextGeneratorColor(colors) {
// const CssTextGeneratorColor = colors => {
//     colors = { ...defaults, ...colors };

//     const { primary, secondary, tertiary, success, warning, danger, dark, medium, light } = colors;
//     const shadeRatio = 0.1;
//     const tintRatio = 0.1;

//     return `
//         /** base **/
//         --ion-color-base: ${light};
//         --ion-color-contrast: ${dark};
//         --ion-background-color: ${light};
//         --ion-text-color: ${dark};
//         --ion-toolbar-background-color: ${contrast(light, 0.1)};
//         --ion-toolbar-text-color: ${contrast(light, 0.1)};
//         --ion-item-background-color: ${contrast(light, 0.3)};
//         --ion-item-text-color: ${contrast(light, 0.3)};

//         /** primary **/
//         --ion-color-primary: ${primary}
//         --ion-color-primary-rgb: 56, 128, 255;
//         --ion-color-primary-contrast: ${contrast(primary)};
//         --ion-color-primary-contrast-rgb: 255, 255, 255;
//         --ion-color-primary-shade: ${Color(primary).darken(shadeRatio)};
//         --ion-color-primary-tint: ${Color(primary).lighten(tintRatio)};

//         /** secondary **/
//         --ion-color-secondary: ${secondary}
//         --ion-color-secondary-rgb: 56, 128, 255;
//         --ion-color-secondary-contrast: ${contrast(secondary)};
//         --ion-color-secondary-contrast-rgb: 255, 255, 255;
//         --ion-color-secondary-shade: ${Color(secondary).darken(shadeRatio)};
//         --ion-color-secondary-tint: ${Color(secondary).lighten(tintRatio)};

//         /** tertiary **/
//         --ion-color-tertiary: ${tertiary}
//         --ion-color-tertiary-rgb: 56, 128, 255;
//         --ion-color-tertiary-contrast: ${contrast(tertiary)};
//         --ion-color-tertiary-contrast-rgb: 255, 255, 255;
//         --ion-color-tertiary-shade: ${Color(tertiary).darken(shadeRatio)};
//         --ion-color-tertiary-tint: ${Color(tertiary).lighten(tintRatio)};

//         /** success **/
//         --ion-color-success: ${success}
//         --ion-color-success-rgb: 56, 128, 255;
//         --ion-color-success-contrast: ${contrast(success)};
//         --ion-color-success-contrast-rgb: 255, 255, 255;
//         --ion-color-success-shade: ${Color(success).darken(shadeRatio)};
//         --ion-color-success-tint: ${Color(success).lighten(tintRatio)};

//         /** warning **/
//         --ion-color-warning: ${warning}
//         --ion-color-warning-rgb: 56, 128, 255;
//         --ion-color-warning-contrast: ${contrast(warning)};
//         --ion-color-warning-contrast-rgb: 255, 255, 255;
//         --ion-color-warning-shade: ${Color(warning).darken(shadeRatio)};
//         --ion-color-warning-tint: ${Color(warning).lighten(tintRatio)};

//         /** danger **/
//         --ion-color-danger: ${danger}
//         --ion-color-danger-rgb: 56, 128, 255;
//         --ion-color-danger-contrast: ${contrast(danger)};
//         --ion-color-danger-contrast-rgb: 255, 255, 255;
//         --ion-color-danger-shade: ${Color(danger).darken(shadeRatio)};
//         --ion-color-danger-tint: ${Color(danger).lighten(tintRatio)};

//         /** dark **/
//         --ion-color-dark: ${dark}
//         --ion-color-dark-rgb: 56, 128, 255;
//         --ion-color-dark-contrast: ${contrast(dark)};
//         --ion-color-dark-contrast-rgb: 255, 255, 255;
//         --ion-color-dark-shade: ${Color(dark).darken(shadeRatio)};
//         --ion-color-dark-tint: ${Color(dark).lighten(tintRatio)};

//         /** medium **/
//         --ion-color-medium: ${medium}
//         --ion-color-medium-rgb: 56, 128, 255;
//         --ion-color-medium-contrast: ${contrast(medium)};
//         --ion-color-medium-contrast-rgb: 255, 255, 255;
//         --ion-color-medium-shade: ${Color(medium).darken(shadeRatio)};
//         --ion-color-medium-tint: ${Color(medium).lighten(tintRatio)};

//         /** medium **/
//         --ion-color-medium: ${medium}
//         --ion-color-medium-rgb: 56, 128, 255;
//         --ion-color-medium-contrast: ${contrast(medium)};
//         --ion-color-medium-contrast-rgb: 255, 255, 255;
//         --ion-color-medium-shade: ${Color(medium).darken(shadeRatio)};
//         --ion-color-medium-tint: ${Color(medium).lighten(tintRatio)};

//         /** light **/
//         --ion-color-light: ${light}
//         --ion-color-light-rgb: 56, 128, 255;
//         --ion-color-light-contrast: ${contrast(light)};
//         --ion-color-light-contrast-rgb: 255, 255, 255;
//         --ion-color-light-shade: ${Color(light).darken(shadeRatio)};
//         --ion-color-light-tint: ${Color(light).lighten(tintRatio)};
//     `;
// };

/* npm i color */
