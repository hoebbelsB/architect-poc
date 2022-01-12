import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>I'm a Dashboard</h1>
  `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid orange;
        background: coral;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardViewComponent {}

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: DashboardViewComponent }]),
  ],
})
export class FeatureDashboardViewModule {}
