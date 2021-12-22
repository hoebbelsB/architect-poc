import { NgModule } from '@angular/core';
import { DashboardsUiModule } from '../../dashboards/ui';
import { SettingsUiModule } from '../../settings/ui';
import { SpacesUiModule } from '../../spaces/ui';

import { SidebarComponent } from './sidebar/sidebar.component';

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
