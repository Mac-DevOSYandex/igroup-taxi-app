import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { LogoutConfirmation } from '../../comptrollers/logout-confirmation';
// import { PopoverPage } from '../../controllers/about-popover';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [
    HomePage, //
    LogoutConfirmation,
    // PopoverPage,
  ],
  entryComponents: [
    LogoutConfirmation, //
    // PopoverPage,
  ],
})
export class HomeModule {}
