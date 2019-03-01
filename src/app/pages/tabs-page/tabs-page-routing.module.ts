import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';
import { WelcomePage } from '../welcome/welcome.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'welcome',
        children: [
          {
            path: '',
            component: WelcomePage,
          },
          // {
          //   path: 'session/:sessionId',
          //   loadChildren: '../session-detail/session-detail.module#SessionDetailModule',
          // },
        ],
      },
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: '../session-detail/session-detail.module#SessionDetailModule',
          },
        ],
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: '../speaker-list/speaker-list.module#SpeakerListModule',
          },
          {
            path: 'session/:sessionId',
            loadChildren: '../session-detail/session-detail.module#SessionDetailModule',
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: '../speaker-detail/speaker-detail.module#SpeakerDetailModule',
          },
        ],
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../map/map.module#MapModule',
          },
        ],
      },
      {
        path: 'carpool',
        children: [
          {
            path: '',
            loadChildren: '../car-pool/car-pool.module#CarPoolModule',
          },
        ],
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutModule',
          },
        ],
      },
      {
        path: '',
        redirectTo: '/app/tabs/welcome',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/app/tabs/welcome',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
