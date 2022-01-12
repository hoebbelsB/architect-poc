import { Injectable } from '@angular/core';
import { SettingsSharedFeatureState } from '@architect-poc/settings-public-state';
import { SettingsType } from '@architect-poc/settings/domain';
import { Signal } from '@architect-poc/utils';
import { map, Observable, tap } from 'rxjs';
import { Space } from '@architect-poc/spaces/domain';
import { SpacesFeatureState } from './ports/data/spaces-feature.state';
import { SpacesAdapter } from './ports/ui/spaces.adapter';

@Injectable({ providedIn: 'root' })
export class SpacesAdapterImpl implements SpacesAdapter {
  readonly action$: Observable<Signal<string> | null> =
    this.settingsState.actions$.pipe(
      map((action) => (action.payload === SettingsType.SPACES ? action : null))
    );

  constructor(
    private readonly spacesState: SpacesFeatureState,
    private readonly settingsState: SettingsSharedFeatureState
  ) {}

  loadSpaces(): Observable<Space[]> {
    return this.spacesState.getSpaces();
  }

  showSettings(): void {
    this.spacesState.showSpacesSettings();
  }
}
