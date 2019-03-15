import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full',
  },
  // home is used for testing
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
  },
  {
    path: 'account',
    loadChildren: './pages/account/account.module#AccountModule',
  },
  {
    path: 'support',
    loadChildren: './pages/support/support.module#SupportModule',
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule',
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignUpModule',
  },
  {
    path: 'app',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule',
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
    canLoad: [CheckTutorial],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
