import { Injectable } from '@angular/core';
import { SpacesStoreService } from '../infrastructure/store/spaces-store.service';
import { ShowSettingsUiPort } from './ports/ui/show-settings-ui.port';

@Injectable({ providedIn: 'root' })
export class ShowSettingsUseCase implements ShowSettingsUiPort {
  constructor(private readonly infrastructure: SpacesStoreService) {}

  showSettings(): void {
    this.infrastructure.showSpacesSettings();
  }
}
