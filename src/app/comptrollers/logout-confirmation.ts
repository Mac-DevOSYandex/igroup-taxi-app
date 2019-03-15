import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  // selector: 'ig-logout-confirmation',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <ion-card>
        <p>
          The src attribute is ignored in user agents that support srcset when 'w' descriptors are included. When the
          (max-width: 600px) media condition matches, the 200px wide image will be loaded (it is the one that matches
          200px most closely), otherwise the other image will be loaded.
        </p>
      </ion-card>
    </ion-content>

    <ion-footer>
      <ion-toolbar color="primary">
        <ion-button expand="full" fill="clear" color="light" (click)="closeModal()">Close</ion-button>
      </ion-toolbar>
    </ion-footer>
  `,
  // styleUrls: ['./logout-confirmation-madal.page.scss'],
})
export class LogoutConfirmation implements OnInit {
  passedId = null;
  constructor(
    private navParams: NavParams, //
    private modalCtrlr: ModalController
  ) {}

  ngOnInit() {
    this.passedId = this.navParams.get('custom_id');
  }

  closeModal() {
    this.modalCtrlr.dismiss();
  }
}
