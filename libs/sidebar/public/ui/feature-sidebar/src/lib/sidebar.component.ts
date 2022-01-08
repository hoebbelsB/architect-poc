import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FeatureDashboardListModule } from '@architect-poc/dashboards/public/ui/feature-dashboard-list';
import { FeatureSettingsModalModule } from '@architect-poc/settings/public/ui/feature-settings-modal';
import { SidebarUiPort } from '@architect-poc/sidebar/use-cases';
import { FeatureSpacesListModule } from '@architect-poc/spaces/public/ui/feature-spaces-list';

@Component({
  selector: 'app-sidebar',
  template: `
    <h2>Sidebar Component</h2>
    <button (click)="showSettings()">Toggle sidebar settings</button>
    <app-settings></app-settings>
    <app-spaces></app-spaces>
    <app-dashboards></app-dashboards>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor(private sidebarUseCase: SidebarUiPort) {}

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