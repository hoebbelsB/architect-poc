import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../domain';
import { DashboardsDataPort } from './ports/infrastructure/dashboards-data.port';
import { DashboardsUiPort } from './ports/ui/dashboards-ui.port';

@Injectable({providedIn: 'root'})
export class DashboardsUseCase implements DashboardsUiPort {
  constructor(private readonly localState: DashboardsDataPort) {}

  loadDashboards(): Observable<Dashboard[]> {
    return this.localState.getDashboards();
  }

  showSettings(): void {
    this.localState.showDashboardSettings();
  }
}
