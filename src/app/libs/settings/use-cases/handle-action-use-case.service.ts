import { Injectable } from '@angular/core';
import { SettingsPort } from './ports/settings-port.service';
import { HandleActionUiPort } from './ports/ui/handle-action.port';
import {SettingsDataPort} from "./ports/infrastructure/settings-data-port.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class HandleActionUseCase implements HandleActionUiPort {
  constructor(
    private readonly localState: SettingsDataPort,
    private readonly externalState: SettingsPort
  ) {}

  triggerAction(action: string): void {
    this.externalState.triggerAction(action);
    this.localState.writeAction(action);
  }

  getActionHistory(): Observable<string[]> {
    return this.localState.settingsState$.pipe(map(({ history }) => history ));
  }

}
