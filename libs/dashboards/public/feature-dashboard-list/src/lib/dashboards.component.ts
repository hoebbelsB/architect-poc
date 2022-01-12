import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardAdapter } from '@architect-poc/dashboards/use-cases';

@Component({
  selector: 'architect-poc-dashboards',
  templateUrl: './dashboards.component.html',
  styles: [
    `
      .container {
        background: mediumseagreen;
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

  constructor(private readonly dashboardAdapter: DashboardAdapter) {}

  showDashboardSettings(): void {
    this.dashboardAdapter.showSettings();
  }
}

@NgModule({
  declarations: [DashboardsComponent],
  imports: [RouterModule, CommonModule],
  exports: [DashboardsComponent],
})
export class FeatureDashboardListModule {}
