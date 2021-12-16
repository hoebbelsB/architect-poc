import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SettingsStateModel } from '../../domain';
import { SettingsDataPort } from '../../use-cases';

@Injectable({ providedIn: 'root' })
export class SettingsStoreService implements SettingsDataPort {
  readonly initialState: SettingsStateModel = {
    history: [],
  };

  readonly settingsState$ = new BehaviorSubject<SettingsStateModel>(
    this.initialState
  );

  writeAction(action: string): void {
    this.settingsState$.next({ history: [...this.settingsState$.getValue().history, action] });
  }
}
