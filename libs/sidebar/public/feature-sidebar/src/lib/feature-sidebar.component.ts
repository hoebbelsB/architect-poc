import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FeatureDashboardListModule } from '@architect-poc/dashboards-public-feature-dashboard-list';
import { FeatureDashboardViewModule } from '@architect-poc/dashboards-public-feature-dashboard-view';
import { FeatureSettingsModalModule } from '@architect-poc/settings-public-feature-settings-modal';
import { FeatureSpacesListModule } from '@architect-poc/spaces-public-feature-space-list';
import { FeatureSidebarAdapter } from './feature-sidebar.adapter';

@Component({
  selector: 'architect-poc-sidebar',
  template: `
    <h2>Sidebar Component</h2>
    <button (click)="showSettings()">Toggle sidebar settings</button>
    <architect-poc-settings></architect-poc-settings>
    <architect-poc-spaces></architect-poc-spaces>
    <architect-poc-dashboards-list></architect-poc-dashboards-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSidebarComponent {
  constructor(private featureSidebarAdapter: FeatureSidebarAdapter) {}

  showSettings() {
    this.featureSidebarAdapter.showSettings();
  }
}

@NgModule({
  imports: [
    FeatureSettingsModalModule,
    FeatureDashboardListModule,
    FeatureSpacesListModule,
    FeatureDashboardViewModule,
  ],
  exports: [FeatureSidebarComponent],
  declarations: [FeatureSidebarComponent],
  providers: [],
})
export class FeatureSidebarModule {}
