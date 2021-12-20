import { Injectable } from '@angular/core';
import { Space } from '../../domain/entities';
import { SpacesDataPort } from '../../use-cases/ports/infrastructure/spaces-data.port';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {SettingsApi} from "../../../settings/infrastructure/settings.api";

@Injectable({ providedIn: 'root' })
export class SpacesStoreService implements SpacesDataPort {


  getSpaces(): Observable<Space[]> {
    return of(new Array(50).fill(0).map((_, i) => ({
      id: `${i}`,
      name: `space no ${i}`
    })));
  }

  constructor(private readonly settingsStore: SettingsApi) {}

  getAction(): Observable<string> {
    return this.settingsStore.settingsState$.pipe(
        map(({ lastAction }) => lastAction)
    );
  }

  clearHistory(): void {
    this.settingsStore.clearHistory();
  }
}
