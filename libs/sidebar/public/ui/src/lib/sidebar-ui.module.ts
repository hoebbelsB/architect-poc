import { NgModule } from '@angular/core';
import { FeatureDashboardListModule } from '@architect-poc/dashboards/public/ui/feature-dashboard-list';
import { SettingsUiModule } from '@architect-poc/settings/public/ui';
import { SpacesUiModule } from '@architect-poc/spaces/public/ui';

import { SidebarComponent } from './container/sidebar/sidebar.component';

@NgModule({
  imports: [SettingsUiModule, SpacesUiModule, FeatureDashboardListModule],
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
  providers: [],
})
export class SidebarUiModule {}
