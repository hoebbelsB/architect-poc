import { Injectable } from '@angular/core';
import { Signal } from '@architect-poc/utils';
import { map, Observable } from 'rxjs';
import { stateToFeature } from './dashboard-feature.mapper';
import { DashboardFeatureState } from './ports/data/dashboard-feature.state';
import { DashboardAdapter } from './ports/ui/dashboard.adapter';

@Injectable({ providedIn: 'root' })
export class DashboardAdapterImpl implements DashboardAdapter {
  readonly action$: Observable<Signal<string> | null> =
    this.dashboardState.action$;

  constructor(
    private readonly dashboardState: DashboardFeatureState,
  ) {}

  readonly dashboards$ = this.dashboardState.dashboards$.pipe(
    map((arr) => arr.map(stateToFeature))
  );

  showSettings(): void {
    this.dashboardState.showDashboardSettings();
  }
}
