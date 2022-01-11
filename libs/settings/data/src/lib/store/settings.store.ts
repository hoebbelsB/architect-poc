import { Injectable } from '@angular/core';
import { SettingsState, SettingsType } from '@architect-poc/settings/domain';
import { SettingsFeatureState } from '@architect-poc/settings/use-cases';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SettingsStore implements SettingsFeatureState {
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
    this.settingsState$.next({
      history: [...this.settingsState$.getValue().history, action],
      lastAction: action,
    });
    this.showSettings(null);
  }

  showSettings(type: SettingsType | null): void {
    this._activeMenu$.next(type);
  }
}
