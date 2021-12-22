import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SettingsType } from '../domain';
import { SettingsDataPort } from './ports/infrastructure/settings-data.port';
import { SettingsUiPort } from './ports/ui/settings-ui.port';

@Injectable({providedIn: 'root'})
export class SettingsUseCase implements SettingsUiPort {
  constructor(
    private readonly localState: SettingsDataPort,
  ) {}

  triggerAction(action: string): void {
    this.localState.writeAction(action);
  }

  getActionHistory(): Observable<string[]> {
    return this.localState.settingsState$.pipe(map(({ history }) => history ));
  }

  getActiveMenu(): Observable<SettingsType | null> {
    return this.localState.activeMenu$;
  }
}
