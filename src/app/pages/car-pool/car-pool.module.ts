import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarPoolPage } from './car-pool';
import { CarPoolPageRoutingModule } from './car-pool-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule, CarPoolPageRoutingModule],
  declarations: [CarPoolPage],
})
export class CarPoolModule {}
