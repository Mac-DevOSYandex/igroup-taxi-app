import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { SchedulePage } from './schedule';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';

const scheduleRoutes: Routes = [
  {
    path: '',
    component: SchedulePage,
  },
];
@NgModule({
  imports: [
    CommonModule, //
    FormsModule,
    RouterModule.forChild(scheduleRoutes),
    IonicModule,
  ],
  declarations: [SchedulePage, ScheduleFilterPage],
  entryComponents: [ScheduleFilterPage],
  exports: [RouterModule],
})
export class ScheduleModule {}
