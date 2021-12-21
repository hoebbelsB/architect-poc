import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsState, SettingsType } from '../domain';

export { SettingsStateModel, SettingsType };

@Injectable()
export abstract class SettingsApi {
  abstract settingsState$: Observable<SettingsState>;

  abstract clearHistory(): void;

  abstract showSettings(type: SettingsType | null): void;
}
