import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { SettingsState, SettingsType } from '../../domain';
import { SettingsDataPort } from '../../use-cases';
import { SettingsApi } from '../../ui/settings.api';

@Injectable({providedIn: 'root'})
export class SettingsStoreService implements SettingsDataPort, SettingsApi {
  readonly initialState: SettingsState = {
    history: [],
    lastAction: '',
  };

  private readonly _activeMenu$ = new ReplaySubject<SettingsType | null>(1);
  readonly activeMenu$ = this._activeMenu$.asObservable();

  readonly settingsState$ = new BehaviorSubject<SettingsState>(
    this.initialState
  );

  writeAction(action: string): void {
    this.settingsState$.next({history: [...this.settingsState$.getValue().history, action], lastAction: action});
    this.showSettings(null);
  }

  clearHistory(): void {
    this.settingsState$.next(this.initialState);
  }

  showSettings(type: SettingsType | null): void {
    this._activeMenu$.next(type);
  }

}
