import { Injectable } from '@angular/core';
import {
  SettingsSharedFeatureState,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { SidebarFeatureState } from '@architect-poc/sidebar/use-cases';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarStore implements SidebarFeatureState {
  // stream responsible for any action dispatched from the settings
  readonly settingsActions$: Observable<Signal<string>> =  this.settingsStore.actions$;
  constructor(private readonly settingsStore: SettingsSharedFeatureState) {
  }

  showSidebarSettings(): void {
    this.settingsStore.showSettings(SettingsType.SIDEBAR);
  }
}
