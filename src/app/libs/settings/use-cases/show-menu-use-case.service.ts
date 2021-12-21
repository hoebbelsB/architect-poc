import { Injectable } from '@angular/core';
import { SettingsType } from '../domain/settings-type';
import { SettingsDataPort } from './ports/infrastructure/settings-data-port.service';
import { Observable } from 'rxjs';
import { ShowMenuPort } from './ports/ui/show-menu.port';

@Injectable({ providedIn: 'root' })
export class ShowMenuUseCase implements ShowMenuPort {

  constructor(
    private readonly localState: SettingsDataPort,
  ) {}

  getActiveMenu(): Observable<SettingsType | null> {
    return this.localState.activeMenu$;
  }

}
