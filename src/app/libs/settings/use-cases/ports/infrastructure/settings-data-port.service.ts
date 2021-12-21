import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsStateModel } from '../../../domain';
import { SettingsType } from '../../../domain/settings-type';

@Injectable()
export abstract class SettingsDataPort {
  abstract writeAction(action: string): void;
  abstract activeMenu$: Observable<SettingsType | null>;
  abstract settingsState$: Observable<SettingsStateModel>;
}
