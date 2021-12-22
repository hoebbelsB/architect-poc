import { Component } from '@angular/core';
import { SpacesUiPort } from '../../use-cases';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styles: [`
    .spaces-list {
      display: flex;
      flex-direction: column;
      width: 250px;
      border: 1px solid blue;
    }

    .space {
      padding: 1rem .5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `]
})
export class SpacesComponent {
  readonly action$ = this.spacesUseCase.getActionData();
  readonly spaces$ = this.spacesUseCase.loadSpaces();

  constructor(
    private readonly spacesUseCase: SpacesUiPort
  ) {
  }

  showSpacesSettings() {
    this.spacesUseCase.showSettings();
  }

  clearHistory() {
    this.spacesUseCase.triggerClearHistory();
  }
}
