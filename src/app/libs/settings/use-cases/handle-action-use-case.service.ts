import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsStateModel } from '../domain';
import { FeatureOneDataPort } from './ports/infrastructure/feature-one-data.port';
import { SettingsDataPort } from './ports/infrastructure/settings-data-port.service';
import { HandleActionUiPort } from './ports/ui/handle-action.port';

@Injectable({ providedIn: 'root' })
export class HandleActionUseCase implements HandleActionUiPort {
  constructor(
    private readonly featureOneDataPort: FeatureOneDataPort,
    private readonly settingsDataPort: SettingsDataPort
  ) {}

  getState(): Observable<SettingsStateModel> {
    return this.settingsDataPort.settingsState$;
  }

  setState(state: boolean): void {
    this.settingsDataPort.toggleState();
  }
}
