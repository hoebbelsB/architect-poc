import { Injectable } from '@angular/core';
import {
  SettingsSharedFeatureState,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { SidebarFeatureState } from '@architect-poc/sidebar/use-cases';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SidebarStore implements SidebarFeatureState {
  constructor(private readonly settingsStore: SettingsSharedFeatureState) {}

  getAction(): Observable<string> {
    return this.settingsStore.settingsState$.pipe(
      map(({ lastAction }) => lastAction)
    );
  }

  showSidebarSettings(): void {
    this.settingsStore.showSettings(SettingsType.SIDEBAR);
  }
}
