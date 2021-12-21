import { Component } from '@angular/core';
import { SettingsType } from '../../domain/settings-type';
import { HandleActionUiPort } from '../../use-cases';
import { ShowMenuPort } from '../../use-cases/ports/ui/show-menu.port';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  history$ = this.settingsUseCase.getActionHistory();
  readonly activeMenu$ = this.showMenuUseCase.getActiveMenu();

  spacesMenuType = SettingsType.SPACES;
  sidebarSettingsType = SettingsType.SIDEBAR;

  constructor(
    private readonly settingsUseCase: HandleActionUiPort,
    private readonly showMenuUseCase: ShowMenuPort
  ) {
    this.activeMenu$.subscribe(m => console.log('activeMenu', m))
  }

  triggerAction(action: string): void {
    this.settingsUseCase.triggerAction(action);
  }

}
