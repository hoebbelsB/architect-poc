import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponentModule } from '@architect-poc/design-system/public/ui';
import { FeatureSpaceListAdapter } from './feature-space-list.adapter';

@Component({
  selector: 'architect-poc-spaces',
  templateUrl: './feature-space-list.component.html',
  styles: [
    `
      .container {
        background: var(--spaces-color);
      }

      .spaces-list {
        display: flex;
        flex-direction: column;
        width: 250px;
        border: 1px solid blue;
      }

      .space {
        padding: 1rem 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `,
  ],
})
export class FeatureSpaceListComponent {
  readonly spaces$ = this.featureSpaceListAdapter.loadSpaces();
  readonly action$ = this.featureSpaceListAdapter.action$;
  constructor(private readonly featureSpaceListAdapter: FeatureSpaceListAdapter) {}

  showSpacesSettings() {
    this.featureSpaceListAdapter.showSettings();
  }
}

@NgModule({
  declarations: [FeatureSpaceListComponent],
  exports: [FeatureSpaceListComponent],
  imports: [CommonModule, RouterModule, ButtonComponentModule],
})
export class FeatureSpacesListModule {}
