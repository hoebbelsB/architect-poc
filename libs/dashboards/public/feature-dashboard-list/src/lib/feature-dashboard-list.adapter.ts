import { Injectable } from '@angular/core';
import { DashboardsStore } from '@architect-poc/dashboards/data';
import { map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FeatureDashboardListAdapter {
  readonly dashboards$ = this.dashboardsStore.dashboards$;
  readonly actionType$ = this.dashboardsStore.settingsActions$.pipe(map(({type}) => type))

  constructor(private readonly dashboardsStore: DashboardsStore) {
  }

  showSettings(): void {
    this.dashboardsStore.showDashboardSettings();
  }
}
