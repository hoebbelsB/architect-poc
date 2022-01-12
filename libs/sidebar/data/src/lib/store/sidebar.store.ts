import { Injectable } from '@angular/core';
import {
  SettingsSharedStore,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { ActionType, Signal } from '@architect-poc/utils';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarStore {
  // stream responsible for any action dispatched from the settings
  readonly settingsActions$: Observable<Signal<ActionType>> =  this.settingsStore.actions$.pipe(
    filter(({type}) => type === ActionType.SIDEBAR)
  );
  constructor(private readonly settingsStore: SettingsSharedStore) {
  }

  showSidebarSettings(): void {
    this.settingsStore.showSettings(SettingsType.SIDEBAR);
  }
}
