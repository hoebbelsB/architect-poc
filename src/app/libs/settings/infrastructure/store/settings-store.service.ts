import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SettingsStateModel } from '../../domain';
import { SettingsDataPort } from '../../use-cases';

@Injectable({ providedIn: 'root' })
export class SettingsStoreService implements SettingsDataPort {
  readonly initialState: SettingsStateModel = {
    isFeatureTwoTrue: false,
  };

  readonly settingsState$ = new BehaviorSubject<SettingsStateModel>(
    this.initialState
  );

  toggleState(): void {
    this.settingsState$.next({
      ...this.initialState,
      isFeatureTwoTrue: !this.settingsState$.value.isFeatureTwoTrue,
    });
  }
}
