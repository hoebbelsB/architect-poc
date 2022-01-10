import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ButtonComponentModule } from '@architect-poc/design-system/public/ui';
import { SettingsType } from '@architect-poc/settings/domain';
import { SettingsAdapter } from '@architect-poc/settings/use-cases';

@Component({
  selector: 'app-settings',
  templateUrl: './settings-modal.component.html',
})
export class SettingsModalComponent {
  readonly history$ = this.settingsAdapter.actionHistory$;
  readonly activeMenu$ = this.settingsAdapter.activeMenu$;

  readonly SettingsType = SettingsType;

  constructor(private readonly settingsAdapter: SettingsAdapter) {
    this.activeMenu$.subscribe((m) => console.log('activeMenu', m));
  }

  triggerAction(action: string): void {
    this.settingsAdapter.triggerAction(action);
  }
}

@NgModule({
  declarations: [SettingsModalComponent],
  exports: [SettingsModalComponent],
  imports: [CommonModule, ButtonComponentModule],
})
export class FeatureSettingsModalModule {}
