import { Injectable } from '@angular/core';
import { SettingsType } from '@architect-poc/settings/domain';
import { SettingsStore } from './settings.store';

@Injectable({ providedIn: 'root' })
export class SettingsSharedStore {
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
