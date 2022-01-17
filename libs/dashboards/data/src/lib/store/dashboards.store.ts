import { Injectable } from '@angular/core';
import { DashboardModel } from '@architect-poc/dashboards/domain';
import { DashboardFeatureState } from '@architect-poc/dashboards/use-cases';
import {
  SettingsSharedFeatureState,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { Signal } from '@architect-poc/utils';
import { concatMap, filter, map, Observable } from 'rxjs';
import { DashboardResource } from '../resource/dashboard.resource';

@Injectable({ providedIn: 'root' })
export class DashboardsStore implements DashboardFeatureState {
  readonly action$: Observable<Signal<string> | null> =
    this.settingsState.actions$.pipe(
      map((action) =>
        action.payload === SettingsType.DASHBOARDS ? action : null
      )
    );
  constructor(
    private readonly settingsState: SettingsSharedFeatureState,
    private readonly dashboardResource: DashboardResource
  ) {
    this.settingsState.actions$.pipe(
      filter(action => action.type === 'dashboard-update'),
      concatMap((action) => this.dashboardResource.postDashboard(action.payload as any))
    ).subscribe();
  }

  readonly dashboards$: Observable<DashboardModel[]> = this.dashboardResource.getDashboards();

  showDashboardSettings(): void {
    this.settingsState.showSettings(SettingsType.DASHBOARDS);
  }
}
