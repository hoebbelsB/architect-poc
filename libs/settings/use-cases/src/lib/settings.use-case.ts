import { Injectable } from '@angular/core';
import { SettingsType } from '@architect-poc/settings/domain';
import { map } from 'rxjs/operators';
import { SettingsFeatureState } from './ports/data/settings-feature.state';
import { SettingsAdapter } from './ports/ui/settings.adapter';

@Injectable({ providedIn: 'root' })
export class SettingsUseCase implements SettingsAdapter {
  actionHistory$ = this.settingsState.settingsState$.pipe(
    map(({ history }) => history)
  );
  activeMenu$ = this.settingsState.activeMenu$;
  menuItems$ = this.settingsState.menuItems$;
  showMenu$ = this.settingsState.showMenu$;
  constructor(private readonly settingsState: SettingsFeatureState) {}

  triggerAction(action: string, settingsType: SettingsType): void {
    this.settingsState.writeAction({ type: action, payload: settingsType });
  }
}
