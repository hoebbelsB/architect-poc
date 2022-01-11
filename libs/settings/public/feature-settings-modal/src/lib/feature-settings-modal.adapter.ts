import { Injectable } from '@angular/core';
import { SettingsStore } from '@architect-poc/settings/data';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FeatureSettingsModalAdapter {
  actionHistory$ = this.localState.settingsState$.pipe(
    map(({ history }) => history)
  );
  activeMenu$ = this.localState.activeMenu$;

  constructor(private readonly localState: SettingsStore) {}

  triggerAction(action: string): void {
    this.localState.writeAction(action);
  }
}
