import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SettingsType } from '../../settings/domain/settings-type';
import { SettingsApi } from '../../settings/infrastructure/settings.api';
import { SidebarDataPort } from '../use-cases/ports/infrastructure/sidebar-data.port';

@Injectable({
  providedIn: 'root'
})
export class SidebarStoreService implements SidebarDataPort {

  constructor(private readonly settingsStore: SettingsApi) { }

  getAction(): Observable<string> {
    return this.settingsStore.settingsState$.pipe(
      map(({ lastAction }) => lastAction)
    );
  }

  showSidebarSettings(): void {
    this.settingsStore.showSettings(SettingsType.SIDEBAR);
  }
}
