import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'architect-poc-dashboard',
  template: `
    <h1>I'm a Dashboard</h1>
  `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid var(--dashboard-color);
        background: var(--dashboard-color);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDashboardViewComponent {}

@NgModule({
  declarations: [FeatureDashboardViewComponent],
  imports: [
    RouterModule.forChild([{path: '', component: FeatureDashboardViewComponent}]),
  ],
  exports: [
    FeatureDashboardViewComponent
  ]
})
export class FeatureDashboardViewModule {}
