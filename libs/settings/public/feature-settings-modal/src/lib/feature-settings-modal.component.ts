import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ButtonComponentModule, MenuItemComponentModule } from '@architect-poc/design-system/public/ui';
import { SettingsType } from '@architect-poc/settings/domain';
import { map } from 'rxjs/operators';
import { FeatureSettingsModalAdapter } from './feature-settings-modal.adapter';

@Component({
  selector: 'architect-poc-settings',
  templateUrl: './feature-settings-modal.component.html',
  styles: [
    `
      .menu-item {
        cursor: pointer;
      }

      .menu-item:hover {
        color: rgba(0,0,0,0.5);
      }

      .settings-container {
        padding: 10px;
      }

      .spaces-settings {
        background: lightskyblue;
      }

      .dashboards-settings {
        background: mediumseagreen;
      }

      .sidebar-settings {
        background: darkgoldenrod;
      }

      .dialog {
        background: hotpink;
        margin-top: 100px;
      }

      .backdrop {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
      }
    `
  ]
})
export class FeatureSettingsModalComponent {
  readonly activeMenuType$ = this.featureSettingsModalAdapter.activeMenu$.pipe(map(({type}) => type));
  readonly showMenu$ = this.featureSettingsModalAdapter.showMenu$;
  readonly menuItems$ = this.featureSettingsModalAdapter.menuItems$;
  readonly SettingsType = SettingsType;

  constructor(private readonly featureSettingsModalAdapter: FeatureSettingsModalAdapter) {}

  triggerAction(action: string): void {
    this.featureSettingsModalAdapter.triggerAction(action);
  }

  closeDialog(): void {
    this.triggerAction('Close dialog');
  }
}

@NgModule({
  declarations: [FeatureSettingsModalComponent],
  exports: [FeatureSettingsModalComponent],
  imports: [CommonModule, ButtonComponentModule, MenuItemComponentModule],
})
export class FeatureSettingsModalModule {}
