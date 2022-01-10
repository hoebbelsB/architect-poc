import { Injectable } from '@angular/core';
import { SettingsState, SettingsType } from '@architect-poc/settings/domain';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SettingsSharedState {
  abstract settingsState$: Observable<SettingsState>;

  abstract clearHistory(): void;

  abstract showSettings(type: SettingsType | null): void;
}
