import { Injectable } from '@angular/core';
import { Dashboard } from '@architect-poc/dashboards/domain';
import { Observable } from 'rxjs';
import { DashboardFeatureState } from './ports/data/dashboard-feature.state';
import { DashboardAdapter } from './ports/ui/dashboard.adapter';

@Injectable({ providedIn: 'root' })
export class DashboardAdapterImpl implements DashboardAdapter {
  constructor(private readonly localState: DashboardFeatureState) {}

  loadDashboards(): Observable<Dashboard[]> {
    return this.localState.getDashboards();
  }

  showSettings(): void {
    this.localState.showDashboardSettings();
  }
}
