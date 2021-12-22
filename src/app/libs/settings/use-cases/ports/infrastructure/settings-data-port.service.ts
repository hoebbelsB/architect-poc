import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsState, SettingsType } from '../../../domain';

@Injectable()
export abstract class SettingsDataPort {
  abstract writeAction(action: string): void;
  abstract activeMenu$: Observable<SettingsType | null>;
  abstract settingsState$: Observable<SettingsState>;
}
