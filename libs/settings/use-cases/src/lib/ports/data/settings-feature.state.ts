import { Injectable } from '@angular/core';
import { SettingsState, SettingsType } from '@architect-poc/settings/domain';
import { Observable } from 'rxjs';
import { MenuItem } from '../../../../../domain/src/lib/menu-item.model';

@Injectable()
export abstract class SettingsFeatureState {
  abstract writeAction(action: string): void;
  abstract activeMenu$: Observable<SettingsType | null>;
  abstract settingsState$: Observable<SettingsState>;
  abstract menuItems$: Observable<MenuItem[]>;
}
