import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardsInterfacesModule } from '@architect-poc/dashboards/public/interfaces';
import { SettingsInterfacesModule } from '@architect-poc/settings/public/interfaces';

import { AppComponent } from './app.component';
import { SidebarModule } from '@architect-poc/sidebar/public/ui';
import { SpacesModule } from '@architect-poc/spaces/public/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SpacesModule.forRoot(),
    SettingsInterfacesModule.forRoot(),
    SidebarModule.forRoot(),
    DashboardsInterfacesModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import(
            '@architect-poc/dashboards/public/ui/feature-dashboard-view'
          ).then((m) => m.FeatureDashboardViewModule),
      },
      {
        path: 'space',
        loadChildren: () =>
          import('@architect-poc/spaces/public/ui').then(
            (m) => m.SpaceComponentModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
