import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardAdapter } from '@architect-poc/dashboards/use-cases';
import { ButtonComponentModule } from '@architect-poc/design-system/public/ui';

@Component({
  selector: 'architect-poc-dashboards',
  templateUrl: './dashboards.component.html',
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
export class DashboardsComponent {
  readonly dashboards$ = this.dashboardAdapter.dashboards$;
  readonly action$ = this.dashboardAdapter.action$;

  constructor(private readonly dashboardAdapter: DashboardAdapter) {}

  showDashboardSettings(): void {
    this.dashboardAdapter.showSettings();
  }
}

@NgModule({
  declarations: [DashboardsComponent],
  imports: [RouterModule, CommonModule, ButtonComponentModule],
  exports: [DashboardsComponent],
})
export class FeatureDashboardListModule {}
