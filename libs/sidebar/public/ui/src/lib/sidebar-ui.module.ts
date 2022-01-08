import { NgModule } from '@angular/core';
import { FeatureDashboardListModule } from '@architect-poc/dashboards/public/ui/feature-dashboard-list';
import { FeatureSettingsModalModule } from '@architect-poc/settings/public/ui/feature-settings-modal';
import { SpacesUiModule } from '@architect-poc/spaces/public/ui';

import { SidebarComponent } from './container/sidebar/sidebar.component';

@NgModule({
  imports: [FeatureSettingsModalModule, SpacesUiModule, FeatureDashboardListModule],
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
  providers: [],
})
export class SidebarUiModule {}
