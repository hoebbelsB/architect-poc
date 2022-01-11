import { Injectable } from '@angular/core';
import { SettingsType } from '@architect-poc/settings/domain';
import { SettingsSharedFeatureState } from '../settings-shared.state';
import { SettingsStore } from './settings.store';

@Injectable({ providedIn: 'root' })
export class SettingsSharedStore implements SettingsSharedFeatureState {
  readonly settingsState$ = this.settingsStore.settingsState$;

  constructor(private readonly settingsStore: SettingsStore) {}

  clearHistory(): void {
    this.settingsStore.settingsState$.next({
      history: [],
      lastAction: '',
    });
  }

  showSettings(type: SettingsType | null): void {
    this.settingsStore.showSettings(type);
  }
}
