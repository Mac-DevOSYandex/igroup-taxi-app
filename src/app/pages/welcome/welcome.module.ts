import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePage } from './welcome.page';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { MoreMenuPopover } from '../../components/popovers/more-menu-popover';

const welcomeRoutes: Routes = [
  {
    path: '',
    component: WelcomePage,
  },
];

@NgModule({
  imports: [
    CommonModule, //
    FormsModule,
    IonicModule,
    RouterModule.forChild(welcomeRoutes),
  ],
  declarations: [WelcomePage, MoreMenuPopover],
  entryComponents: [MoreMenuPopover, ScheduleFilterPage],
  exports: [RouterModule],
})
export class WelcomeModule {}
