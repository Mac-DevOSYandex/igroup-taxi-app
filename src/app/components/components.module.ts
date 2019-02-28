import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { AppMenuComponent } from './app-menu/app-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppMenuComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [AppMenuComponent],
})
export class ComponentsModule {}
