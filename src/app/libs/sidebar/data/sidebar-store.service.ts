import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SettingsApi, SettingsType } from '../../settings/ui';
import { SidebarDataPort } from '../use-cases';

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
