import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AppMenuComponent } from './app-menu/app-menu.component';
import { LogoutConfirmation } from './logout-confirmation-modal';
import { RouterModule } from '@angular/router';
import { ColorMenu } from './color-menu/color-menu.component';
import { ColorPopover } from './popovers/color-popover';
// import { GoogleLoginComponent } from './google-login/google-login.component';

@NgModule({
  declarations: [
    AppMenuComponent, //
    // GoogleLoginComponent,
    LogoutConfirmation,
    ColorMenu,
    ColorPopover,
  ],
  imports: [CommonModule, IonicModule, RouterModule],
  entryComponents: [ColorPopover],
  exports: [
    AppMenuComponent, //
    // GoogleLoginComponent,
  ],
})
export class ComponentsModule {}
