import { Injectable } from '@angular/core';
import { Dashboard } from '@architect-poc/dashboards/domain';
import { Observable } from 'rxjs';
import { DashboardsDataPort } from './ports/data/dashboards-data.port';
import { DashboardsUiPort } from './ports/ui/dashboards-ui.port';

@Injectable({ providedIn: 'root' })
export class DashboardsUseCase implements DashboardsUiPort {
  constructor(private readonly localState: DashboardsDataPort) {}

  loadDashboards(): Observable<Dashboard[]> {
    return this.localState.getDashboards();
  }

  showSettings(): void {
    this.localState.showDashboardSettings();
  }
}
