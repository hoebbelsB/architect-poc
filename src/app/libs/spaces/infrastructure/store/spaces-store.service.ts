import { Injectable } from '@angular/core';
import { SpacesDataPort } from '../../use-cases/ports/infrastructure/spaces-data-port.service';
import { SettingsStoreService } from '../../../settings/infrastructure/store/settings-store.service';
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {SettingsApi} from "../../../settings/infrastructure/SettingsApi";

@Injectable({ providedIn: 'root' })
export class SpacesStoreService implements SpacesDataPort {
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
