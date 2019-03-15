import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupportPage } from './support';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SupportPage,
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule, //
    RouterModule.forChild(routes),
    IonicModule,
  ],
  exports: [RouterModule],
  declarations: [SupportPage],
})
export class SupportModule {}
