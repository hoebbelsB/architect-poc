import { Injectable } from '@angular/core';
import { SettingsState, SettingsType } from '@architect-poc/settings/domain';
import { MenuItem, Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SettingsFeatureState {
  abstract writeAction(action: Signal<string, SettingsType>): void;
  abstract activeMenu$: Observable<Signal<SettingsType>>;
  abstract settingsState$: Observable<SettingsState>;
  abstract menuItems$: Observable<MenuItem[]>;
  abstract showMenu$: Observable<boolean>;
  // actions dispatched from the settings changing state of another feature
  abstract actions$: Observable<Signal<string, SettingsType>>;
}
