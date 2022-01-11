import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ButtonComponentModule, MenuItemComponentModule } from '@architect-poc/design-system/public/ui';
import { SettingsType } from '@architect-poc/settings/domain';
import { FeatureSettingsModalAdapter } from './feature-settings-modal.adapter';

@Component({
  selector: 'architect-poc-settings',
  templateUrl: './feature-settings-modal.component.html',
})
export class FeatureSettingsModalComponent {
  readonly history$ = this.featureSettingsModalAdapter.actionHistory$;
  readonly activeMenu$ = this.featureSettingsModalAdapter.activeMenu$;
  readonly menuItems$ = this.featureSettingsModalAdapter.menuItems$;
  readonly SettingsType = SettingsType;

  constructor(private readonly featureSettingsModalAdapter: FeatureSettingsModalAdapter) {
    this.activeMenu$.subscribe((m) => console.log('activeMenu', m));
  }

  triggerAction(action: string): void {
    this.featureSettingsModalAdapter.triggerAction(action);
  }
}

@NgModule({
  declarations: [FeatureSettingsModalComponent],
  exports: [FeatureSettingsModalComponent],
  imports: [CommonModule, ButtonComponentModule, MenuItemComponentModule],
})
export class FeatureSettingsModalModule {}
