import { Injectable } from '@angular/core';
import { SettingsType } from '../domain';
import { SettingsDataPort } from './ports/infrastructure/settings-data-port.service';
import { Observable } from 'rxjs';
import { ShowMenuUiPort } from './ports/ui/show-menu-ui.port';

@Injectable({ providedIn: 'root' })
export class ShowMenuUseCase implements ShowMenuUiPort {

  constructor(
    private readonly localState: SettingsDataPort,
  ) {}

  getActiveMenu(): Observable<SettingsType | null> {
    return this.localState.activeMenu$;
  }

}
