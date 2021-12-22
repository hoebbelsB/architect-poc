import { NgModule } from '@angular/core';
import { DashboardsUiModule } from '@architect-poc/dashboards/public/ui';
import { SettingsUiModule } from '@architect-poc/settings/public/ui';
import { SpacesUiModule } from '@architect-poc/spaces/public/ui';

import { SidebarComponent } from './container/sidebar/sidebar.component';

@NgModule({
  imports: [
    SettingsUiModule,
    SpacesUiModule,
    DashboardsUiModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [SidebarComponent],
  providers: [

  ],
})
export class SidebarUiModule {}
