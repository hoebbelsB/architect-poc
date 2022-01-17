import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardsPublicStateModule } from '@architect-poc/dashboards-public-state';
import { FeatureSettingsModalModule } from '@architect-poc/settings-public-feature-settings-modal';
import { SettingsPublicStateModule } from '@architect-poc/settings-public-state';
import { SidebarPublicStateModule } from '@architect-poc/sidebar-public-state';
import { FeatureSidebarModule } from '@architect-poc/sidebar-public-feature-sidebar';
import { SpacesPublicStateModule } from '@architect-poc/spaces-public-state';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SpacesPublicStateModule.forRoot(),
    SettingsPublicStateModule.forRoot(),
    SidebarPublicStateModule.forRoot(),
    DashboardsPublicStateModule.forRoot(),
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
            '@architect-poc/dashboards-public-feature-dashboard-view'
            ).then((m) => m.FeatureDashboardViewModule),
      },
      {
        path: 'space',
        loadChildren: () =>
          import('@architect-poc/spaces-public-feature-space-view').then(
            (m) => m.FeatureSpaceListModule
          ),
      },
    ]),
    FeatureSidebarModule,
    FeatureSettingsModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
