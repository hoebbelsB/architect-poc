import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'architect-poc-space',
  template: ` <h1>I'm a Space</h1> `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid var(--spaces-color);
        background: var(--spaces-color);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSpaceViewComponent {}

@NgModule({
  declarations: [FeatureSpaceViewComponent],
  imports: [RouterModule.forChild([{ path: '', component: FeatureSpaceViewComponent }])],
})
export class FeatureSpaceListModule {}
