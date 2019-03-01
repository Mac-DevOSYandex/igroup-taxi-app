import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AppMenuComponent } from './app-menu/app-menu.component';
import { RouterModule } from '@angular/router';
import { ColorMenu } from './color-menu/color-menu.component';
import { ColorPopover } from './popovers/color-popover';

@NgModule({
  declarations: [AppMenuComponent, ColorMenu, ColorPopover],
  imports: [CommonModule, IonicModule, RouterModule],
  entryComponents: [ColorPopover],
  exports: [AppMenuComponent],
})
export class ComponentsModule {}
