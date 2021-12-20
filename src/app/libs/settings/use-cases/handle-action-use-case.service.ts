import { Injectable } from '@angular/core';
import { HandleActionUiPort } from './ports/ui/handle-action.port';
import { SettingsDataPort } from './ports/infrastructure/settings-data-port.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HandleActionUseCase implements HandleActionUiPort {
  constructor(
    private readonly localState: SettingsDataPort,
  ) {}

  triggerAction(action: string): void {
    this.localState.writeAction(action);
  }

  getActionHistory(): Observable<string[]> {
    return this.localState.settingsState$.pipe(map(({ history }) => history ));
  }

}
