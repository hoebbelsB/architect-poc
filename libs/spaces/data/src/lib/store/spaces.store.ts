import { Injectable } from '@angular/core';
import {
  SettingsSharedStore,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Space } from '@architect-poc/spaces/domain';
import { SpacesResource } from '../resource/spaces.resource';

@Injectable({ providedIn: 'root' })
export class SpacesStore {
  getSpaces(): Observable<Space[]> {
    return this.spacesResource.getSpaces();
  }

  constructor(
    private readonly settingsStore: SettingsSharedStore,
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
