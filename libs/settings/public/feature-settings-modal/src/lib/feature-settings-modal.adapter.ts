import { Injectable } from '@angular/core';
import { SettingsStore } from '@architect-poc/settings/data';
import { SettingsType } from '@architect-poc/settings/domain';
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

  triggerAction(action: string, settingsType: SettingsType): void {
    this.settingsStore.writeAction({type: action, payload: settingsType});
  }
}
