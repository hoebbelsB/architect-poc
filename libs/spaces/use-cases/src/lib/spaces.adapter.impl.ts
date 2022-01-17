import { Injectable } from '@angular/core';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';
import { Space } from '@architect-poc/spaces/domain';
import { SpacesFeatureState } from './ports/data/spaces-feature.state';
import { SpacesAdapter } from './ports/ui/spaces.adapter';

@Injectable({ providedIn: 'root' })
export class SpacesAdapterImpl implements SpacesAdapter {
  readonly action$: Observable<Signal<string> | null> =
    this.spacesState.action$;

  constructor(
    private readonly spacesState: SpacesFeatureState,
  ) {}

  loadSpaces(): Observable<Space[]> {
    return this.spacesState.getSpaces();
  }

  showSettings(): void {
    this.spacesState.showSpacesSettings();
  }
}
