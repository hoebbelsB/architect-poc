import { Injectable } from '@angular/core';
import { SidebarFeatureState } from './ports/data/sidebar-feature.state';
import { SidebarAdapter } from './ports/ui/sidebar.adapter';

@Injectable({ providedIn: 'root' })
export class SidebarUseCase implements SidebarAdapter {
  constructor(private sidebarStore: SidebarFeatureState) {}

  showSettings() {
    this.sidebarStore.showSidebarSettings();
  }
}
