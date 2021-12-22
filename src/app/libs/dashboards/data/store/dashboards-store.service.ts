import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SettingsApi, SettingsType } from '../../../settings/public/interfaces/index';
import { Dashboard } from '../../domain';
import { DashboardsDataPort } from '../../use-cases';

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
