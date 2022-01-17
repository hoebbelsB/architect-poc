import { Injectable } from '@angular/core';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';
import { SidebarFeatureState } from './ports/data/sidebar-feature.state';
import { SidebarAdapter } from './ports/ui/sidebar.adapter';

@Injectable({ providedIn: 'root' })
export class SidebarAdapterImpl implements SidebarAdapter {
  readonly action$: Observable<Signal<string> | null> =
    this.sidebarStore.action$;

  constructor(
    private sidebarStore: SidebarFeatureState,
  ) {}

  showSettings() {
    this.sidebarStore.showSidebarSettings();
  }
}
