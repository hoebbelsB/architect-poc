import { Injectable } from '@angular/core';
import { SettingsPort } from './ports/settings-port.service';
import { HandleActionUiPort } from './ports/ui/handle-action.port';

@Injectable({ providedIn: 'root' })
export class HandleActionUseCase implements HandleActionUiPort {
  constructor(
    private readonly settingsPort: SettingsPort
  ) {}

  triggerAction(action: string): void {
    this.settingsPort.triggerAction(action);
  }
}
