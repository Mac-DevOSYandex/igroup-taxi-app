import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';
import { MoreMenuPopover } from '../../components/popovers/more-menu-popover';
// import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) {}

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: MoreMenuPopover,
      event,
    });
    await popover.present();
  }
}
