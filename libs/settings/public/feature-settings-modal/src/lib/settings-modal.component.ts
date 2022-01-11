import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ButtonComponentModule } from '@architect-poc/design-system/public/ui';
import { SettingsAdapter } from '@architect-poc/settings/use-cases';
import { SettingsType } from '@architect-poc/settings/domain';

@Component({
  selector: 'app-settings',
  templateUrl: './settings-modal.component.html',
})
export class SettingsModalComponent {
  readonly history$ = this.settingsUseCase.actionHistory$;
  readonly activeMenu$ = this.settingsUseCase.activeMenu$;

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
  imports: [CommonModule, ButtonComponentModule],
})
export class FeatureSettingsModalModule {}
