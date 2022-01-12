import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FeatureDashboardListModule } from '@architect-poc/dashboards-public-feature-dashboard-list';
import { SidebarAdapter } from '@architect-poc/sidebar/use-cases';
import { FeatureSpacesListModule } from '@architect-poc/spaces-public-feaure-space-list';

@Component({
  selector: 'architect-poc-sidebar',
  styles: [
    `
      :host {
        background: darkgoldenrod;
      }
    `
  ],
  template: `
    <h2>Sidebar Component</h2>
    <button (click)="showSettings()">Toggle sidebar settings</button>
    <app-spaces></app-spaces>
    <app-dashboards></app-dashboards>
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
    FeatureDashboardListModule,
    FeatureSpacesListModule,
  ],
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
  providers: [],
})
export class FeatureSidebarModule {}
