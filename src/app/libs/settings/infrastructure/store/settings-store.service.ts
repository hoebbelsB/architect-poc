import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { SettingsStateModel } from '../../domain';
import { SettingsDataPort } from '../../use-cases';
import {SettingsApi} from "../settings.api";

@Injectable({ providedIn: 'root' })
export class SettingsStoreService implements SettingsDataPort, SettingsApi {
  readonly initialState: SettingsStateModel = {
    history: [],
    lastAction: '',
  };

  readonly settingsState$ = new BehaviorSubject<SettingsStateModel>(
    this.initialState
  );

  writeAction(action: string): void {
    this.settingsState$.next({ history: [...this.settingsState$.getValue().history, action], lastAction: action });
  }

  clearHistory(): void {
    console.log('clear')
    this.settingsState$.next(this.initialState);

  }
}
