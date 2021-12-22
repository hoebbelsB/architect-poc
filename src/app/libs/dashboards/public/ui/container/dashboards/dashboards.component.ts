import { Component } from '@angular/core';
import { DashboardsUiPort } from '../../../../use-cases/index';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styles: [`
    .dashboards-list {
      display: flex;
      flex-direction: column;
      width: 250px;
      border: 1px solid green;
    }

    .dashboard {
      padding: 1rem .5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `]
})
export class DashboardsComponent {
  readonly dashboards$ = this.dashboardsUseCase.loadDashboards();

  constructor(private readonly dashboardsUseCase: DashboardsUiPort) {
  }

  showDashboardSettings(): void {
    this.dashboardsUseCase.showSettings();
  }
}
