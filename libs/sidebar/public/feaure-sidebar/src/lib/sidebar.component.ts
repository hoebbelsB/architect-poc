import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FeatureDashboardListModule } from '@architect-poc/dashboards-public-feature-dashboard-list';
import { SidebarAdapter } from '@architect-poc/sidebar/use-cases';
import { FeatureSpacesListModule } from '@architect-poc/spaces-public-feaure-space-list';

@Component({
  selector: 'architect-poc-sidebar',
  styles: [
    `
      :host {
        background: darkgoldenrod;
      }
    `,
  ],
  template: `
    <h2>Sidebar Component</h2>
    <div *ngIf="action$ | async as action">
      Action selected: <strong>{{ action.type }}</strong>
    </div>
    <button (click)="showSettings()">Toggle sidebar settings</button>
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
  imports: [FeatureDashboardListModule, FeatureSpacesListModule, CommonModule],
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
  providers: [],
})
export class FeatureSidebarModule {}
