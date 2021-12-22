import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SettingsDataPort } from './ports/data/settings-data.port';
import { SettingsUiPort } from './ports/ui/settings-ui.port';

@Injectable({providedIn: 'root'})
export class SettingsAdapter implements SettingsUiPort {

  actionHistory$ = this.localState.settingsState$.pipe(map(({ history }) => history ));
  activeMenu$ = this.localState.activeMenu$;

  constructor(
    private readonly localState: SettingsDataPort,
  ) {}

  triggerAction(action: string): void {
    this.localState.writeAction(action);
  }

}
