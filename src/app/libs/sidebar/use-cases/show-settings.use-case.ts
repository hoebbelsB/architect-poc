import { Injectable } from '@angular/core';
import { SidebarDataPort } from './ports/infrastructure/sidebar-data.port';
import { ShowSettingsUiPort } from './ports/ui/show-settings-ui.port';

@Injectable({ providedIn: 'root' })
export class ShowSettingsUseCase implements ShowSettingsUiPort {

  constructor(private sidebarStore: SidebarDataPort) { }

  showSettings() {
    this.sidebarStore.showSidebarSettings();
  }
}
