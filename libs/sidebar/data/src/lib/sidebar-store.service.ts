import { Injectable } from '@angular/core';
import { SidebarDataPort } from '@architect-poc/sidebar/use-cases';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SettingsApi, SettingsType } from '../../../../../apps/architect-poc/src/app/libs/settings/public/interfaces/index';

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
