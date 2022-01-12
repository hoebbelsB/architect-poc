import { Injectable } from '@angular/core';
import { SettingsStore } from '@architect-poc/settings/data';
import { ActionType, Signal } from '@architect-poc/utils';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FeatureSettingsModalAdapter {
  readonly actionHistory$ = this.settingsStore.settingsState$.pipe(
    map(({ history }) => history)
  );
  readonly activeMenu$ = this.settingsStore.activeMenu$;
  readonly menuItems$ = this.settingsStore.menuItems$;
  readonly showMenu$ = this.settingsStore.showMenu$;

  constructor(private readonly settingsStore: SettingsStore) {}

  triggerAction(action: Signal<ActionType>): void {
    this.settingsStore.writeAction(action);
  }
}
