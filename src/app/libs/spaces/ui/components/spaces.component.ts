import { Component } from '@angular/core';
import { HandleActionUiPort, LoadSpacesPort, ShowSettingsUiPort, TriggerActionUiPort } from '../../use-cases';

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
  readonly action$ = this.handleActionUseCase.getActionData();
  readonly spaces$ = this.loadSpacesUseCase.loadSpaces();

  constructor(
    private readonly handleActionUseCase: HandleActionUiPort,
    private readonly triggerActionUseCase: TriggerActionUiPort,
    private readonly loadSpacesUseCase: LoadSpacesPort,
    private readonly showSettingsUseCase: ShowSettingsUiPort
  ) {}

  showSpacesSettings() {
    this.showSettingsUseCase.showSettings();
  }

  clearHistory() {
    this.triggerActionUseCase.triggerClearHistory();
  }
}
