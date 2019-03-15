import { Component, Input } from '@angular/core';
import { NavParams, AlertController, LoadingController } from '@ionic/angular';

const log = console.log;

@Component({
  selector: 'ig-modal-page',
  styles: [``],
  template: ``,
})
export class LogoutConfirmation {
  // "value" passed in componentProps
  @Input() value: number;

  constructor(
    private navParams: NavParams, //
    private alertCtrlr: AlertController,
    private loadingCtrlr: LoadingController
  ) {
    // componentProps can also be accessed at construction time using NavParams
  }
  async alertAction() {
    const alertAction = await this.alertCtrlr.create({
      // header: 'Alert',
      subHeader: 'Logout',
      message: 'Are you sure you wish to logout?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: _ => {
            log('You Click, I Alert:Cancel! First handler!!!');
          },
        },
        {
          text: 'Ok',
          cssClass: 'tertiary',
          handler: () => {
            // code goes here -log!
            log('You Click, I Alert:Okay! Second handler!!!');
          },
        },
      ],
    });
    await alertAction.present();
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingCtrlr.create({
      spinner: 'bubbles',
      message: 'Please wait...',
      mode: 'ios',
      duration: 1000,
      translucent: true,
    });
    return await loading.present();
  }
}
