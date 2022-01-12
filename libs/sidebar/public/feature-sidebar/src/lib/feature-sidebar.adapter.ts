import { Injectable } from '@angular/core';
import { SidebarStore } from '@architect-poc/sidebar/data';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FeatureSidebarAdapter {
  readonly actionType$ = this.sidebarStore.settingsActions$.pipe(map(({type}) => type));
  constructor(private sidebarStore: SidebarStore) {}

  showSettings() {
    this.sidebarStore.showSidebarSettings();
  }}
