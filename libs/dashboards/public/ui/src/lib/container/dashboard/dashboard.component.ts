import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: ` <h1>I'm a Dashboard</h1> `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid orange;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
  ],
})
export class DashboardComponentModule {}
