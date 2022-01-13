import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FeatureDashboardListModule } from '@architect-poc/dashboards-public-feature-dashboard-list';
import { ButtonComponentModule } from '@architect-poc/design-system/public/ui';
import { FeatureSpacesListModule } from '@architect-poc/spaces-public-feature-space-list';
import { FeatureSidebarAdapter } from './feature-sidebar.adapter';

@Component({
  selector: 'architect-poc-sidebar',
  styles: [
    `
      :host {
        background: var(--sidebar-color);
      }
    `
  ],
  templateUrl: './feature-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSidebarComponent {
  readonly action$ = this.featureSidebarAdapter.action$;
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
    ButtonComponentModule,
  ],
  exports: [FeatureSidebarComponent],
  declarations: [FeatureSidebarComponent],
  providers: [],
})
export class FeatureSidebarModule {}
