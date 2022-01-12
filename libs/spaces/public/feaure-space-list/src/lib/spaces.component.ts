import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponentModule } from '@architect-poc/design-system/public/ui';
import { SpacesAdapter } from '@architect-poc/spaces/use-cases';

@Component({
  selector: 'architect-poc-spaces',
  templateUrl: './spaces.component.html',
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
export class SpacesComponent {
  readonly action$ = this.spacesAdapter.action$;
  readonly spaces$ = this.spacesAdapter.loadSpaces();

  constructor(private readonly spacesAdapter: SpacesAdapter) {}

  showSpacesSettings() {
    this.spacesAdapter.showSettings();
  }
}

@NgModule({
  declarations: [SpacesComponent],
  exports: [SpacesComponent],
  imports: [CommonModule, RouterModule, ButtonComponentModule],
})
export class FeatureSpacesListModule {}
