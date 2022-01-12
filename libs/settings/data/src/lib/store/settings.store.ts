import { Injectable } from '@angular/core';
import { SettingsState, SettingsType } from '@architect-poc/settings/domain';
import { ActionType, Signal } from '@architect-poc/utils';
import { BehaviorSubject, ReplaySubject, Subject, switchMap } from 'rxjs';
import { SettingsResource } from '../resource/settings.resource';

@Injectable({providedIn: 'root'})
export class SettingsStore {
  readonly initialState: SettingsState = {
    history: [],
    lastAction: '',
  };

  readonly actions$ = new Subject<Signal<ActionType>>();

  private readonly _activeMenu$ = new ReplaySubject<Signal<SettingsType>>(1);
  private readonly _showMenu$ = new BehaviorSubject<boolean>(false);
  readonly activeMenu$ = this._activeMenu$.asObservable();
  readonly showMenu$ = this._showMenu$.asObservable();
  readonly menuItems$ = this.activeMenu$.pipe(
    switchMap(({type}) => this.settingsResource.getMenuItems(type))
  );

  constructor(private readonly settingsResource: SettingsResource) {}

  readonly settingsState$ = new BehaviorSubject<SettingsState>(
    this.initialState
  );

  writeAction(action: Signal<ActionType>): void {
    if (action.type !== ActionType.CLOSE) {
      this.actions$.next(action);
    }
    this._showMenu$.next(false);
  }

  showSettings(type: SettingsType | null): void {
    if (type) {
      this._showMenu$.next(true);
      this._activeMenu$.next({type});
    }
  }
}
