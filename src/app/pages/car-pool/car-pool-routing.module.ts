import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarPoolPage } from './car-pool';

const routes: Routes = [
  {
    path: '',
    component: CarPoolPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarPoolPageRoutingModule {}
