import { Injectable } from '@angular/core';
import { SettingsSharedFeatureState } from '@architect-poc/settings-public-state';
import { SettingsType } from '@architect-poc/settings/domain';
import { Signal } from '@architect-poc/utils';
import { map, Observable } from 'rxjs';
import { stateToFeature } from './dashboard-feature.mapper';
import { DashboardFeatureState } from './ports/data/dashboard-feature.state';
import { DashboardAdapter } from './ports/ui/dashboard.adapter';

@Injectable({ providedIn: 'root' })
export class DashboardAdapterImpl implements DashboardAdapter {
  readonly action$: Observable<Signal<string> | null> =
    this.settingsState.actions$.pipe(
      map((action) =>
        action.payload === SettingsType.DASHBOARDS ? action : null
      )
    );

  constructor(
    private readonly dashboardState: DashboardFeatureState,
    private readonly settingsState: SettingsSharedFeatureState
  ) {}

  readonly dashboards$ = this.dashboardState.dashboards$.pipe(
    map((arr) => arr.map(stateToFeature))
  );

  showSettings(): void {
    this.dashboardState.showDashboardSettings();
  }
}
