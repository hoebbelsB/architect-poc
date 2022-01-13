import { Injectable } from '@angular/core';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';
import { SpacesStore } from '@architect-poc/spaces/data';
import { Space } from '@architect-poc/spaces/domain';

@Injectable({ providedIn: 'root' })
export class FeatureSpaceListAdapter {
  readonly action$: Observable<Signal<string> | null> = this.spacesStore.settingsActions$;
  constructor(private readonly spacesStore: SpacesStore) {}

  loadSpaces(): Observable<Space[]> {
    return this.spacesStore.getSpaces();
  }

  showSettings(): void {
    this.spacesStore.showSpacesSettings();
  }
}
