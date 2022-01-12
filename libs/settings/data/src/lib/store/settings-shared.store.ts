import { Injectable } from '@angular/core';
import { SettingsType } from '@architect-poc/settings/domain';
import { SettingsSharedFeatureState } from '../settings-shared.state';
import { SettingsStore } from './settings.store';

@Injectable({ providedIn: 'root' })
export class SettingsSharedStore implements SettingsSharedFeatureState {
  readonly actions$ = this.settingsStore.actions$;

  constructor(private readonly settingsStore: SettingsStore) {}


  // FIXME: does this make sense anymore?
  clearHistory(): void {
    // this.settingsStore.settingsState$.next({
    //   history: [],
    //   lastAction: '',
    // });
  }

  showSettings(type: SettingsType | null): void {
    this.settingsStore.showSettings(type);
  }
}
