import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SpacesStore } from '@architect-poc/spaces/data';
import { Space } from '@architect-poc/spaces/domain';

@Injectable({ providedIn: 'root' })
export class FeatureSpaceListAdapter {
  readonly action$ = this.spacesStore.settingsActions$.pipe(map(({payload}) => (payload as any).name));
  constructor(private readonly spacesStore: SpacesStore) {}

  loadSpaces(): Observable<Space[]> {
    return this.spacesStore.getSpaces();
  }

  showSettings(): void {
    this.spacesStore.showSpacesSettings();
  }
}
