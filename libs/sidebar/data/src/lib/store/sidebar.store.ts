import { Injectable } from '@angular/core';
import {
  SettingsSharedFeatureState,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { SidebarFeatureState } from '@architect-poc/sidebar/use-cases';
import { Signal } from '@architect-poc/utils';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarStore implements SidebarFeatureState {
  // stream responsible for any action dispatched from the settings
  readonly action$: Observable<Signal<string> | null> =  this.settingsStore.actions$.pipe(
    map((action) => (action.payload === SettingsType.SIDEBAR ? action : null))
  );
  constructor(private readonly settingsStore: SettingsSharedFeatureState) {
  }

  showSidebarSettings(): void {
    this.settingsStore.showSettings(SettingsType.SIDEBAR);
  }
}
