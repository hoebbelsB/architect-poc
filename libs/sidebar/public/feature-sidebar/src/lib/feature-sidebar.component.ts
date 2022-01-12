import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FeatureDashboardListModule } from '@architect-poc/dashboards-public-feature-dashboard-list';
import { FeatureSpacesListModule } from '@architect-poc/spaces-public-feature-space-list';
import { FeatureSidebarAdapter } from './feature-sidebar.adapter';

@Component({
  selector: 'architect-poc-sidebar',
  styles: [
    `
      :host {
        background: darkgoldenrod;
      }
    `
  ],
  templateUrl: './feature-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSidebarComponent {
  readonly actionType$ = this.featureSidebarAdapter.actionType$;
  constructor(private featureSidebarAdapter: FeatureSidebarAdapter) {}

  showSettings() {
    this.featureSidebarAdapter.showSettings();
  }
}

@NgModule({
  imports: [
    FeatureDashboardListModule,
    FeatureSpacesListModule,
    CommonModule,
  ],
  exports: [FeatureSidebarComponent],
  declarations: [FeatureSidebarComponent],
  providers: [],
})
export class FeatureSidebarModule {}
