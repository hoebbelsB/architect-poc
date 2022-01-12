import { Injectable } from '@angular/core';
import {
  SettingsSharedFeatureState,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';
import { Space } from '@architect-poc/spaces/domain';
import { SpacesFeatureState } from '@architect-poc/spaces/use-cases';
import { SpacesResource } from '../resource/spaces.resource';

@Injectable({ providedIn: 'root' })
export class SpacesStore implements SpacesFeatureState {
  // stream responsible for any action dispatched from the settings
  readonly settingsActions$: Observable<Signal<string>> = this.settingsStore.actions$;

  constructor(
    private readonly settingsStore: SettingsSharedFeatureState,
    private readonly spacesResource: SpacesResource
  ) {}

  getSpaces(): Observable<Space[]> {
    return this.spacesResource.getSpaces();
  }

  showSpacesSettings(): void {
    this.settingsStore.showSettings(SettingsType.SPACES);
  }

  clearHistory(): void {
    this.settingsStore.clearHistory();
  }
}
