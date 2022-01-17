import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FeatureDashboardListModule } from '@architect-poc/dashboards-public-feature-dashboard-list';
import { ButtonComponentModule } from '@architect-poc/design-system/public/ui';
import { SidebarAdapter } from '@architect-poc/sidebar/use-cases';
import { FeatureSpacesListModule } from '@architect-poc/spaces-public-feature-space-list';

@Component({
  selector: 'architect-poc-sidebar',
  styles: [
    `
      :host {
        background: var(--sidebar-color);
      }
    `,
  ],
  template: `
    <h2>Sidebar Component</h2>
    <div *ngIf="action$ | async as action">
      Action selected: <strong>{{ action.type }}</strong>
    </div>
    <button ds-button (click)="showSettings()">Toggle sidebar settings</button>
    <architect-poc-spaces></architect-poc-spaces>
    <architect-poc-dashboards></architect-poc-dashboards>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  action$ = this.sidebarAdapter.action$;

  constructor(private sidebarAdapter: SidebarAdapter) {}

  showSettings() {
    this.sidebarAdapter.showSettings();
  }
}

@NgModule({
  imports: [
    FeatureDashboardListModule,
    FeatureSpacesListModule,
    CommonModule,
    ButtonComponentModule,
  ],
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
  providers: [],
})
export class FeatureSidebarModule {}
