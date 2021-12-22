import { NgModule } from '@angular/core';
import { DashboardsUiModule } from '../../../dashboards/public/ui/index';
import { SettingsUiModule } from '../../../settings/public/ui/index';
import { SpacesUiModule } from '../../../spaces/public/ui/index';

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
