import { Injectable } from '@angular/core';
import { SettingsState, SettingsType } from '@architect-poc/settings/domain';
import { BehaviorSubject, filter, ReplaySubject, switchMap } from 'rxjs';
import { SettingsResource } from '../resource/settings.resource';

@Injectable({ providedIn: 'root' })
export class SettingsStore {
  readonly initialState: SettingsState = {
    history: [],
    lastAction: '',
  };

  private readonly _activeMenu$ = new ReplaySubject<SettingsType | null>(1);
  readonly activeMenu$ = this._activeMenu$.asObservable();

  readonly menuItems$ = this.activeMenu$.pipe(
    filter((type): type is SettingsType => type !== null),
    switchMap((type) => this.settingsResource.getMenuItems(type))
  );

  constructor(private readonly settingsResource: SettingsResource) {
  }

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
