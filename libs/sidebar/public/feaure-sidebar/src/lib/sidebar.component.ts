import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FeatureDashboardListModule } from '@architect-poc/dashboards-public-feature-dashboard-list';
import { FeatureSettingsModalModule } from '@architect-poc/settings-public-feature-settings-modal';
import { SidebarAdapter } from '@architect-poc/sidebar/use-cases';
import { FeatureSpacesListModule } from '@architect-poc/spaces-public-feaure-space-list';

@Component({
  selector: 'architect-poc-sidebar',
  template: `
    <h2>Sidebar Component</h2>
    <button (click)="showSettings()">Toggle sidebar settings</button>
    <architect-poc-settings></architect-poc-settings>
    <architect-poc-spaces></architect-poc-spaces>
    <architect-poc-dashboards></architect-poc-dashboards>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor(private sidebarUseCase: SidebarAdapter) {}

  showSettings() {
    this.sidebarUseCase.showSettings();
  }
}

@NgModule({
  imports: [
    FeatureSettingsModalModule,
    FeatureDashboardListModule,
    FeatureSpacesListModule,
  ],
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
  providers: [],
})
export class FeatureSidebarModule {}
