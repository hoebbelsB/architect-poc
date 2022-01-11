import { Injectable } from '@angular/core';
import { SpacesStore } from '@architect-poc/spaces/data';
import { Space } from '@architect-poc/spaces/domain';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FeatureSpaceListAdapter {
  constructor(private readonly spacesDataPort: SpacesStore) {}

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
