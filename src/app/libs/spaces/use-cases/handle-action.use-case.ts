import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsDataPort } from './ports/infrastructure/settings-data-port.service';
import { HandleActionUiPort } from './ports/ui/handle-action-ui-port.service';

@Injectable({ providedIn: 'root' })
export class HandleActionUseCase implements HandleActionUiPort {
  constructor(
    private readonly settingsDataPort: SettingsDataPort,
  ) {}

  getActionData(): Observable<string> {
    return this.settingsDataPort.getAction();
  }

}
