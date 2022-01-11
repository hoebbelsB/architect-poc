import { Injectable } from '@angular/core';
import {
  SettingsSharedFeatureState,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Space } from '@architect-poc/spaces/domain';
import { SpacesFeatureState } from '@architect-poc/spaces/use-cases';
import { SpacesResource } from '../resource/spaces.resource';

@Injectable({ providedIn: 'root' })
export class SpacesStore implements SpacesFeatureState {
  getSpaces(): Observable<Space[]> {
    return this.spacesResource.getSpaces();
  }

  constructor(
    private readonly settingsStore: SettingsSharedFeatureState,
    private readonly spacesResource: SpacesResource
  ) {}

  getAction(): Observable<string> {
    return this.settingsStore.settingsState$.pipe(
      map(({ lastAction }) => lastAction)
    );
  }

  showSpacesSettings(): void {
    this.settingsStore.showSettings(SettingsType.SPACES);
  }

  clearHistory(): void {
    this.settingsStore.clearHistory();
  }
}
