import { Injectable } from '@angular/core';
import { Dashboard } from '@architect-poc/dashboards/domain';
import {
  SettingsSharedStore,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { Observable } from 'rxjs';
import { DashboardResource } from '../resource/dashboard.resource';

@Injectable({ providedIn: 'root' })
export class DashboardsStore {
  constructor(
    private readonly settingsStore: SettingsSharedStore,
    private readonly dashboardResource: DashboardResource
  ) {}

  getDashboards(): Observable<Dashboard[]> {
    return this.dashboardResource.getDashboards();
  }

  showDashboardSettings(): void {
    this.settingsStore.showSettings(SettingsType.DASHBOARDS);
  }
}
