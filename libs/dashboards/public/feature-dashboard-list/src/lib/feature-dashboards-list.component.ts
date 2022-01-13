import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponentModule } from '@architect-poc/design-system/public/ui';
import { FeatureDashboardListAdapter } from './feature-dashboard-list.adapter';

@Component({
  selector: 'architect-poc-dashboards-list',
  templateUrl: './feature-dashboards-list.component.html',
  styles: [
    `
      .container {
        background: var(--dashboard-color);
      }

      .dashboards-list {
        display: flex;
        flex-direction: column;
        width: 250px;
        border: 1px solid green;
      }

      .dashboard {
        padding: 1rem 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `,
  ],
})
export class FeatureDashboardsListComponent {
  readonly dashboards$ = this.featureDashboardListAdapter.dashboards$;
  readonly action$ = this.featureDashboardListAdapter.action$;
  constructor(private readonly featureDashboardListAdapter: FeatureDashboardListAdapter) {}

  showDashboardSettings(): void {
    this.featureDashboardListAdapter.showSettings();
  }
}

@NgModule({
  declarations: [FeatureDashboardsListComponent],
  imports: [RouterModule, CommonModule, ButtonComponentModule],
  exports: [FeatureDashboardsListComponent],
})
export class FeatureDashboardListModule {}
