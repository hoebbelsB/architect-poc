import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { SettingsStateModel } from '../../domain';
import { SettingsType } from '../../domain/settings-type';
import { SettingsDataPort } from '../../use-cases';
import {SettingsApi} from "../../ui/settings.api";

@Injectable({ providedIn: 'root' })
export class SettingsStoreService implements SettingsDataPort, SettingsApi {
  readonly initialState: SettingsStateModel = {
    history: [],
    lastAction: '',
  };

  private readonly _activeMenu$ = new ReplaySubject<SettingsType | null>(1);
  readonly activeMenu$ = this._activeMenu$.asObservable();

  readonly settingsState$ = new BehaviorSubject<SettingsStateModel>(
    this.initialState
  );

  writeAction(action: string): void {
    this.settingsState$.next({ history: [...this.settingsState$.getValue().history, action], lastAction: action });
    this.showSettings(null);
  }

  clearHistory(): void {
    this.settingsState$.next(this.initialState);
  }

  showSettings(type: SettingsType | null): void {
    this._activeMenu$.next(type);
  }

}
