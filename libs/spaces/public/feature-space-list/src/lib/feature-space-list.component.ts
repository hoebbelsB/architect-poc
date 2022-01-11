import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureSpaceListAdapter } from './feature-space-list.adapter';

@Component({
  selector: 'architect-poc-spaces',
  templateUrl: './feature-space-list.component.html',
  styles: [
    `
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
  readonly action$ = this.featureSpaceListAdapter.getActionData();
  readonly spaces$ = this.featureSpaceListAdapter.loadSpaces();

  constructor(private readonly featureSpaceListAdapter: FeatureSpaceListAdapter) {}

  showSpacesSettings() {
    this.featureSpaceListAdapter.showSettings();
  }

  clearHistory() {
    this.featureSpaceListAdapter.triggerClearHistory();
  }
}

@NgModule({
  declarations: [FeatureSpaceListComponent],
  exports: [FeatureSpaceListComponent],
  imports: [CommonModule, RouterModule],
})
export class FeatureSpacesListModule {}
