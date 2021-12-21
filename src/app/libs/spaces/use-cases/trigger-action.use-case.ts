import { Injectable } from '@angular/core';
import { TriggerActionUiPort } from './ports/ui/trigger-action-ui.port';
import { SpacesDataPort } from './ports/infrastructure/spaces-data.port';

@Injectable({providedIn: 'root'})
export class TriggerActionUseCase implements TriggerActionUiPort {
  constructor(private readonly store: SpacesDataPort) {
  }

  triggerClearHistory(): void {
    this.store.clearHistory();
  }
}
