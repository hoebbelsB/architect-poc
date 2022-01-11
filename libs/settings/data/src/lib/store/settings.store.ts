import { Injectable } from '@angular/core';
import { SettingsState, SettingsType } from '@architect-poc/settings/domain';
import { SettingsFeatureState } from '@architect-poc/settings/use-cases';
import { Signal } from '@architect-poc/utils';
import { BehaviorSubject, filter, ReplaySubject, Subject, switchMap } from 'rxjs';
import { SettingsResource } from '../resource/settings.resource';

@Injectable({ providedIn: 'root' })
export class SettingsStore implements SettingsFeatureState {
  readonly initialState: SettingsState = {
    history: [],
    lastAction: '',
  };

  readonly actions$ = new Subject<Signal>();

  private readonly _activeMenu$ = new ReplaySubject<Signal<SettingsType>>(1);
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

  writeAction(action: Signal<string, any>): void {
    // this.settingsState$.next({
    //   history: [...this.settingsState$.getValue().history, action.type],
    //   lastAction: action.type,
    // });
    this.actions$.next(action);
    this.showSettings(null);
  }

  showSettings(type: SettingsType | null): void {
    this._activeMenu$.next(type);
  }
}
