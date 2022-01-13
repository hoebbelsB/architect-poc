import { Injectable } from '@angular/core';
import { SettingsType } from '@architect-poc/settings/domain';
import { SettingsStore } from './settings.store';

@Injectable({ providedIn: 'root' })
export class SettingsSharedStore {
  readonly actions$ = this.settingsStore.actions$;

  constructor(private readonly settingsStore: SettingsStore) {}

  showSettings(type: SettingsType | null): void {
    this.settingsStore.showSettings(type);
  }
}
