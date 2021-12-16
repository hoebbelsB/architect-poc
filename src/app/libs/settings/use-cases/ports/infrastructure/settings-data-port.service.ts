import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsStateModel } from '../../../domain';

@Injectable()
export abstract class SettingsDataPort {
  abstract writeAction(action: string): void;
  abstract clearHistory(): void;
  abstract settingsState$: Observable<SettingsStateModel>;
}
