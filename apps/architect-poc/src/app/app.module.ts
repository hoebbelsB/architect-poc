import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardsInterfacesModule } from '@architect-poc/dashboards/public/interfaces';
import { SettingsInterfacesModule } from '@architect-poc/settings/public/interfaces';
import { SidebarInterfacesModule } from '@architect-poc/sidebar/public/interfaces';
import { FeatureSidebarModule } from '@architect-poc/sidebar/public/ui/feature-sidebar';
import { SpacesInterfacesModule } from '@architect-poc/spaces/public/interfaces';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SpacesInterfacesModule.forRoot(),
    SettingsInterfacesModule.forRoot(),
    SidebarInterfacesModule.forRoot(),
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
          import('@architect-poc/spaces/public/ui/feature-spaces-view').then(
            (m) => m.FeatureSpaceListModule
          ),
      },
    ]),
    FeatureSidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
