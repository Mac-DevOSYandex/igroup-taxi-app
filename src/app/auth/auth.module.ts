import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from '../pages/login/login.module';
// import { AuthEffects } from './effects/auth.effects';

const authRoutes: Routes = [];

export const COMPONENTS = [];

@NgModule({
  declarations: [],
  imports: [
    LoginModule,
    CommonModule, //
    RouterModule.forChild(authRoutes),
    StoreModule.forFeature('auth', reducers),
    // EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
