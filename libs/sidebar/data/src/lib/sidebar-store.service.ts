import { Injectable } from '@angular/core';
import { SettingsApi, SettingsType } from '@architect-poc/settings/public/interfaces';
import { SidebarDataPort } from '@architect-poc/sidebar/use-cases';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
