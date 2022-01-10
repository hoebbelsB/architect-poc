import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SettingsGlobalState } from './ports/data/settings-data.port';

@Injectable({ providedIn: 'root' })
export class SettingsAdapter {
  actionHistory$ = this.globalState.settingsState$.pipe(
    map(({ history }) => history)
  );
  activeMenu$ = this.globalState.activeMenu$;

  constructor(private readonly globalState: SettingsGlobalState) {}

  triggerAction(action: string): void {
    this.globalState.writeAction(action);
  }
}
