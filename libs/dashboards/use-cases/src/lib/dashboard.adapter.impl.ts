import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { stateToFeature } from './dashboard-feature.mapper';
import { DashboardFeatureState } from './ports/data/dashboard-feature.state';
import { DashboardAdapter } from './ports/ui/dashboard.adapter';

@Injectable({providedIn: 'root'})
export class DashboardAdapterImpl implements DashboardAdapter {
  constructor(private readonly localState: DashboardFeatureState) {
  }

  readonly dashboards$ = this.localState.dashboards$.pipe(map(arr => arr.map(stateToFeature)));

  showSettings(): void {
    this.localState.showDashboardSettings();
  }
}
