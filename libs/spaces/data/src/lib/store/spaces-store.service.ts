import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SettingsApi, SettingsType } from '../../../../../../apps/architect-poc/src/app/libs/settings/public/interfaces/index';
import { Space } from '@architect-poc/spaces/domain';
import { SpacesDataPort } from '@architect-poc/spaces/use-cases';

@Injectable({ providedIn: 'root' })
export class SpacesStoreService implements SpacesDataPort {


  getSpaces(): Observable<Space[]> {
    return of(new Array(10).fill(0).map((_, i) => ({
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

  showSpacesSettings(): void {
    this.settingsStore.showSettings(SettingsType.SPACES);
  }

  clearHistory(): void {
    this.settingsStore.clearHistory();
  }
}
