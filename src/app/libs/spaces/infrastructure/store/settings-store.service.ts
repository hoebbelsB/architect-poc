import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import { SettingsDataPort } from '../../use-cases/ports/infrastructure/settings-data-port.service';
import {SettingsStoreFacade} from "../../../global-store";

// rename to: FeatureOneLocalStateService or something similar
@Injectable({ providedIn: 'root' })
export class SettingsStoreService implements SettingsDataPort {
  constructor(private settingsStore: SettingsStoreFacade) {
  }

  getAction(): Observable<string> {
    return this.settingsStore.actionTriggered$;
  }

}
