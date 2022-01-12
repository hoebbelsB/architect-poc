import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Space } from '@architect-poc/spaces/domain';
import { SpacesFeatureState } from './ports/data/spaces-feature.state';
import { SpacesAdapter } from './ports/ui/spaces.adapter';

@Injectable({ providedIn: 'root' })
export class SpacesUseCase implements SpacesAdapter {
  constructor(private readonly spacesDataPort: SpacesFeatureState) {}

  readonly settingsActions$: Observable<string> = this.spacesDataPort.settingsActions$.pipe(map(({type}) => type));

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
