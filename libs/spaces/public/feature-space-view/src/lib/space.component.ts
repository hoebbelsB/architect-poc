import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'architect-poc-space',
  template: ` <h1>I'm a Space</h1> `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid purple;
        background: var(--spaces-color);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceComponent {}

@NgModule({
  declarations: [SpaceComponent],
  imports: [RouterModule.forChild([{ path: '', component: SpaceComponent }])],
})
export class FeatureSpaceListModule {}
