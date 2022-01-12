import { Injectable } from '@angular/core';
import { MenuItem } from '@architect-poc/design-system/public/ui';
import { SettingsState, SettingsType } from '@architect-poc/settings/domain';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SettingsFeatureState {
  abstract writeAction(action: Signal<string>): void;
  abstract activeMenu$: Observable<Signal<SettingsType>>;
  abstract settingsState$: Observable<SettingsState>;
  abstract menuItems$: Observable<MenuItem[]>;
  // actions dispatched from the settings changing state of another feature
  abstract actions$: Observable<Signal<string>>;
}
