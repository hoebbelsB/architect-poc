import { Injectable } from '@angular/core';
import { Dashboard } from '@architect-poc/dashboards/domain';
import { DashboardFeatureState } from '@architect-poc/dashboards/use-cases';
import {
  SettingsSharedFeatureState,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { Observable } from 'rxjs';
import { DashboardResource } from '../resource/dashboard.resource';

@Injectable({ providedIn: 'root' })
export class DashboardsStore implements DashboardFeatureState {
  constructor(
    private readonly settingsState: SettingsSharedFeatureState,
    private readonly dashboardResource: DashboardResource
  ) {}

  getDashboards(): Observable<Dashboard[]> {
    return this.dashboardResource.getDashboards();
  }

  showDashboardSettings(): void {
    this.settingsState.showSettings(SettingsType.DASHBOARDS);
  }
}
