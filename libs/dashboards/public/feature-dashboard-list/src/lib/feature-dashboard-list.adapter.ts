import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '@architect-poc/dashboards/domain';
import { DashboardsStore } from '@architect-poc/dashboards/data';

@Injectable({ providedIn: 'root' })
export class FeatureDashboardListAdapter {
  constructor(private readonly localState: DashboardsStore) {}

  loadDashboards(): Observable<Dashboard[]> {
    return this.localState.getDashboards();
  }

  showSettings(): void {
    this.localState.showDashboardSettings();
  }
}
