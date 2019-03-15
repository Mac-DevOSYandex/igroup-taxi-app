import { Component, OnInit } from '@angular/core';
import {
  NavController,
  ModalController,
  PopoverController,
  AlertController,
  ActionSheetController,
} from '@ionic/angular';
import { PopoverPage } from '../../comptrollers/about-popover';
import { LogoutConfirmation } from '../../comptrollers/logout-confirmation';

const log = console.log;

@Component({
  selector: 'ig-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  value: 0;

  constructor(
    private navCtrlr: NavController, //
    public modalCtlr: ModalController,
    public popoverCtlr: PopoverController,
    public alertCtrlr: AlertController,
    public actionShtCtrlr: ActionSheetController
  ) {}

  pushPage() {
    this.navCtrlr.navigateForward(`/login`);
  }

  async alertAction() {
    const alertAction = await this.alertCtrlr.create({
      header: 'Logout',
      // subHeader: 'Message',
      message: 'Are you sure you wish to logout?',
      backdropDismiss: false,
      // animated: false,
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: _ => {
            // code goes here!
            log('You Click, I Alert:Cancel! First handler!!!');
          },
        },
        {
          text: 'OK',
          cssClass: 'tertiary',
          handler: _ => {
            // code goes here -log!
            log('You Click, I Alert:Okay! Second handler!!!');
          },
        },
      ],
    });
    await alertAction.present();
  }

  async openModal() {
    const modalRef = await this.modalCtlr.create({
      component: LogoutConfirmation,
      componentProps: {
        custom_id: this.value,
      },
    });
    await modalRef.present();
  }

  async openPopover(ev: Event) {
    const popoverRef = await this.popoverCtlr.create({
      component: PopoverPage,
      componentProps: {
        custom_id: this.value,
      },
      event: ev,
    });
    await popoverRef.present();
  }

  ngOnInit() {}
}
