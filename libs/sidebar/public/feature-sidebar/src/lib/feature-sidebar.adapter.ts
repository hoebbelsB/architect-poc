import { Injectable } from '@angular/core';
import { SidebarStore } from '@architect-poc/sidebar/data';

@Injectable({ providedIn: 'root' })
export class FeatureSidebarAdapter {
  constructor(private sidebarStore: SidebarStore) {}

  showSettings() {
    this.sidebarStore.showSidebarSettings();
  }}
