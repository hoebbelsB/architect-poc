import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Space } from '@architect-poc/spaces/domain';
import { SpacesDataPort } from './ports/data/spaces-data.port';
import { SpacesUiPort } from './ports/ui/spaces-ui.port';

@Injectable({ providedIn: 'root' })
export class SpacesUseCase implements SpacesUiPort {
  constructor(private readonly spacesDataPort: SpacesDataPort) {}

  getActionData(): Observable<string> {
    return this.spacesDataPort.getAction();
  }

  loadSpaces(): Observable<Space[]> {
    return this.spacesDataPort.getSpaces();
  }

  showSettings(): void {
    this.spacesDataPort.showSpacesSettings();
  }

  triggerClearHistory(): void {
    this.spacesDataPort.clearHistory();
  }
}
