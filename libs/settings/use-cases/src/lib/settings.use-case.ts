import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SettingsFeatureState } from './ports/data/settings-feature.state';
import { SettingsAdapter } from './ports/ui/settings.adapter';

@Injectable({ providedIn: 'root' })
export class SettingsUseCase implements SettingsAdapter {
  actionHistory$ = this.localState.settingsState$.pipe(
    map(({ history }) => history)
  );
  activeMenu$ = this.localState.activeMenu$;
  menuItems$ = this.localState.menuItems$;
  constructor(private readonly localState: SettingsFeatureState) {}

  triggerAction(action: string): void {
    this.localState.writeAction({type: action});
  }
}
