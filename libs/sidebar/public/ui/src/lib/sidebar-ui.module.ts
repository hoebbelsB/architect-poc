import { NgModule } from '@angular/core';
import { DashboardsUiModule } from '@architect-poc/dashboards/public/ui';
import { SettingsUiModule } from '../../../../../../apps/architect-poc/src/app/libs/settings/public/ui/index';
import { SpacesUiModule } from '../../../../../../apps/architect-poc/src/app/libs/spaces/public/ui/index';

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
