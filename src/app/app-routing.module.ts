import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages

import { DashboardDefaultComponent } from './example-pages/dashboard-default/dashboard-default.component';
import { DashboardAnalyticsComponent } from './example-pages/dashboard-analytics/dashboard-analytics.component';
import { ApplicationsCalendarComponent } from './example-pages/applications-calendar/applications-calendar.component';
import { ApplicationsChatComponent } from './example-pages/applications-chat/applications-chat.component';
import { AvatarsComponent } from './example-pages/avatars/avatars.component';
import { NavigationMenusComponent } from './example-pages/navigation-menus/navigation-menus.component';
import { ApexChartsComponent } from './example-pages/apex-charts/apex-charts.component';
import { GaugesChartsComponent } from './example-pages/gauges-charts/gauges-charts.component';

// Layouts

import { LeftSidebarComponent } from './layout-blueprints/left-sidebar/left-sidebar.component';
import { CollapsedSidebarComponent } from './layout-blueprints/collapsed-sidebar/collapsed-sidebar.component';
import { MinimalLayoutComponent } from './layout-blueprints/minimal-layout/minimal-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard-default',
    pathMatch: 'full'
  },
    {
    path: '',
    component: LeftSidebarComponent,
    children: [
      { path: 'dashboard-default', component: DashboardDefaultComponent },
      { path: 'dashboard-analytics', component: DashboardAnalyticsComponent },
      { path: 'applications-calendar', component: ApplicationsCalendarComponent },
      { path: 'applications-chat', component: ApplicationsChatComponent },
      { path: 'avatars', component: AvatarsComponent },
      { path: 'navigation-menus', component: NavigationMenusComponent },
      { path: 'apex-charts', component: ApexChartsComponent },
      { path: 'gauges-charts', component: GaugesChartsComponent },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
