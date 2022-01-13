import { Injectable } from '@angular/core';
import { SidebarStore } from '@architect-poc/sidebar/data';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FeatureSidebarAdapter {
  readonly action$: Observable<Signal<string> | null> = this.sidebarStore.settingsActions$;
  constructor(private sidebarStore: SidebarStore) {}

  showSettings() {
    this.sidebarStore.showSidebarSettings();
  }}
