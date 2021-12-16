import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpacesStoreFacade } from '../../../global-store/index';
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

  constructor(
    private readonly spacesStateStore: SpacesStoreFacade
  ) {
    this.spacesStateStore.clearActionTriggered$.subscribe(() => this.clearHistory());
  }

  writeAction(action: string): void {
    this.settingsState$.next({ history: [...this.settingsState$.getValue().history, action] });
  }

  clearHistory(): void {
    console.log('clear')
    this.settingsState$.next(this.initialState);

  }
}
