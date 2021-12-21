import { Component } from '@angular/core';
import { SettingsType } from '../../domain';
import { HandleActionUiPort, ShowMenuUiPort } from '../../use-cases';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  history$ = this.settingsUseCase.getActionHistory();
  readonly activeMenu$ = this.showMenuUseCase.getActiveMenu();

  readonly SettingsType = SettingsType;

  constructor(
    private readonly settingsUseCase: HandleActionUiPort,
    private readonly showMenuUseCase: ShowMenuUiPort
  ) {
    this.activeMenu$.subscribe(m => console.log('activeMenu', m))
  }

  triggerAction(action: string): void {
    this.settingsUseCase.triggerAction(action);
  }

}
