import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardsModule } from './libs/dashboards/dashboards.module';
import { SidebarModule } from './libs/sidebar/sidebar.module';
import { SpacesModule } from './libs/spaces/spaces.module';
import { SettingsModule } from './libs/settings/settings.module';

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
