import { Injectable } from '@angular/core';
import { SettingsSharedFeatureState } from '@architect-poc/settings-public-state';
import { SettingsType } from '@architect-poc/settings/domain';
import { Signal } from '@architect-poc/utils';
import { map, Observable } from 'rxjs';
import { SidebarFeatureState } from './ports/data/sidebar-feature.state';
import { SidebarAdapter } from './ports/ui/sidebar.adapter';

@Injectable({ providedIn: 'root' })
export class SidebarAdapterImpl implements SidebarAdapter {
  readonly action$: Observable<Signal<string> | null> =
    this.settingsState.actions$.pipe(
      map((action) => (action.payload === SettingsType.SIDEBAR ? action : null))
    );

  constructor(
    private sidebarStore: SidebarFeatureState,
    private settingsState: SettingsSharedFeatureState
  ) {}

  showSettings() {
    this.sidebarStore.showSidebarSettings();
  }
}
