import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardsModule } from '@architect-poc/dashboards/public/ui';
import { SettingsModule } from '@architect-poc/settings/public/ui';

import { AppComponent } from './app.component';
import { SidebarModule } from '@architect-poc/sidebar/public/ui';
import { SpacesModule } from '@architect-poc/spaces/public/ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpacesModule.forRoot(),
    SettingsModule.forRoot(),
    SidebarModule.forRoot(),
    DashboardsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
