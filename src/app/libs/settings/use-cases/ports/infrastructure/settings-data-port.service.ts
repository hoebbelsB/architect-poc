import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsStateModel } from '../../../domain';

@Injectable()
export abstract class SettingsDataPort {
  abstract toggleState(): void;
  abstract settingsState$: Observable<SettingsStateModel>;
}
