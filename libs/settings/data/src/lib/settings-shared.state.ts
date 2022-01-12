import { Injectable } from '@angular/core';
import { SettingsType } from '@architect-poc/settings/domain';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SettingsSharedFeatureState {
  abstract clearHistory(): void;

  abstract showSettings(type: SettingsType | null): void;

  // actions dispatched from the settings changing state of another feature
  abstract actions$: Observable<Signal<string>>;
}
