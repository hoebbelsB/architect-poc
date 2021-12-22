import { Injectable } from '@angular/core';
import { Dashboard } from '@architect-poc/dashboards/domain';
import { DashboardsDataPort } from '@architect-poc/dashboards/use-cases';
import { Observable, of } from 'rxjs';
import {
  SettingsApi,
  SettingsType
} from '../../../../../../apps/architect-poc/src/app/libs/settings/public/interfaces/index';

@Injectable({providedIn: 'root'})
export class DashboardsStoreService implements DashboardsDataPort {
  constructor(private readonly settingsState: SettingsApi) {
  }

  getDashboards(): Observable<Dashboard[]> {
    return of(new Array(10).fill(0).map((_, i) => ({
      id: `${i}`,
      name: `dashboard no ${i}`
    })));
  }

  showDashboardSettings(): void {
    this.settingsState.showSettings(SettingsType.DASHBOARDS);
  }
}
