import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutPage } from '@pages/about/about';
// import { AboutPage } from './about';
import { PopoverPage } from '../../comptrollers/about-popover';
import { MoreMenuPopover } from '../../components/popovers/more-menu-popover';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AboutPage,
  },
];

@NgModule({
  imports: [
    CommonModule, //
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AboutPage, PopoverPage],
  entryComponents: [PopoverPage],
  exports: [RouterModule],
  bootstrap: [AboutPage],
})
export class AboutModule {}
