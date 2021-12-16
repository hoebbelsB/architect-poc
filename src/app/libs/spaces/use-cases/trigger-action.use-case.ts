import { Injectable } from '@angular/core';
import { TriggerActionUiPort } from './ports/ui/trigger-action-ui.port';
import {SpacesPort} from "./ports/spaces-port.service";

@Injectable({ providedIn: 'root' })
export class TriggerActionUseCase implements TriggerActionUiPort {
  constructor(private readonly externalState: SpacesPort) {}

  triggerClearHistory(): void {
    console.log('TriggerActionUseCase')
    this.externalState.triggerClearAction();
  }


}
