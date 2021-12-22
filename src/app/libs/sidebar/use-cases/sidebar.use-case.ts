import { Injectable } from '@angular/core';
import { SidebarDataPort } from './ports/data/sidebar-data.port';
import { SidebarUiPort } from './ports/ui/sidebar-ui.port';

@Injectable({providedIn: 'root'})
export class SidebarUseCase implements SidebarUiPort {
  constructor(private sidebarStore: SidebarDataPort) { }

  showSettings() {
    this.sidebarStore.showSidebarSettings();
  }
}
