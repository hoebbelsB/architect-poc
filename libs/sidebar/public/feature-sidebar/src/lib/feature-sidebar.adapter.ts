import { Injectable } from '@angular/core';
import { SidebarStore } from '@architect-poc/sidebar/data';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FeatureSidebarAdapter {
  readonly action$ = this.sidebarStore.settingsActions$.pipe(map(({payload}) => (payload as any).name));
  constructor(private sidebarStore: SidebarStore) {}

  showSettings() {
    this.sidebarStore.showSidebarSettings();
  }}
