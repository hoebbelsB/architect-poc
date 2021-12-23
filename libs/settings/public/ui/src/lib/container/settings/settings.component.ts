import { Component } from '@angular/core';
import { SettingsUiPort } from '@architect-poc/settings/use-cases';
import { SettingsType } from '@architect-poc/settings/domain';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  readonly history$ = this.settingsUseCase.actionHistory$;
  readonly activeMenu$ = this.settingsUseCase.activeMenu$;

  readonly SettingsType = SettingsType;

  constructor(private readonly settingsUseCase: SettingsUiPort) {
    this.activeMenu$.subscribe((m) => console.log('activeMenu', m));
  }

  triggerAction(action: string): void {
    this.settingsUseCase.triggerAction(action);
  }
}
