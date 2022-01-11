import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ButtonComponentModule, MenuItemComponentModule } from '@architect-poc/design-system/public/ui';
import { SettingsAdapter } from '@architect-poc/settings/use-cases';
import { SettingsType } from '@architect-poc/settings/domain';

@Component({
  selector: 'architect-poc-settings',
  templateUrl: './settings-modal.component.html',
})
export class SettingsModalComponent {
  readonly history$ = this.settingsUseCase.actionHistory$;
  readonly activeMenu$ = this.settingsUseCase.activeMenu$;
  readonly menuItems$ = this.settingsUseCase.menuItems$;
  readonly SettingsType = SettingsType;

  constructor(private readonly settingsUseCase: SettingsAdapter) {
    this.activeMenu$.subscribe((m) => console.log('activeMenu', m));
  }

  triggerAction(action: string): void {
    this.settingsUseCase.triggerAction(action);
  }
}

@NgModule({
  declarations: [SettingsModalComponent],
  exports: [SettingsModalComponent],
  imports: [CommonModule, ButtonComponentModule, MenuItemComponentModule],
})
export class FeatureSettingsModalModule {}
