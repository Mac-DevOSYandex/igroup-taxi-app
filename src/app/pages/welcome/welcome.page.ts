import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MoreMenuPopover } from '../../components/popovers/more-menu-popover';

@Component({
  selector: 'ig-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  constructor(public popoverCtrl: PopoverController) {}

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: MoreMenuPopover,
      event,
    });
    await popover.present();
  }

  ngOnInit() {}
}
