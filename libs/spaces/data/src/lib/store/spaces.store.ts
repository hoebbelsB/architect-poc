import { Injectable } from '@angular/core';
import {
  SettingsSharedStore,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { ActionType, Signal } from '@architect-poc/utils';
import { filter, Observable } from 'rxjs';
import { Space } from '@architect-poc/spaces/domain';
import { SpacesResource } from '../resource/spaces.resource';

@Injectable({ providedIn: 'root' })
export class SpacesStore {
  // stream responsible for any action dispatched from the settings
  readonly settingsActions$: Observable<Signal<ActionType>> = this.settingsStore.actions$.pipe(
    filter(({type}) => type === ActionType.SPACES)
  );

  constructor(
    private readonly settingsStore: SettingsSharedStore,
    private readonly spacesResource: SpacesResource
  ) {}

  getSpaces(): Observable<Space[]> {
    return this.spacesResource.getSpaces();
  }

  showSpacesSettings(): void {
    this.settingsStore.showSettings(SettingsType.SPACES);
  }
}
