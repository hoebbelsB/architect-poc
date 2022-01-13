import { Injectable } from '@angular/core';
import {
  SettingsSharedStore,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { Signal } from '@architect-poc/utils';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarStore {
  // stream responsible for any action dispatched from the settings
  readonly settingsActions$: Observable<Signal<string> | null> =  this.settingsStore.actions$.pipe(
    map((action) =>
      action.payload === SettingsType.SIDEBAR ? action : null
    )  );
  constructor(private readonly settingsStore: SettingsSharedStore) {
  }

  showSidebarSettings(): void {
    this.settingsStore.showSettings(SettingsType.SIDEBAR);
  }
}
