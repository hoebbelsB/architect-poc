import { Component } from '@angular/core';
import { HandleActionUiPort, LoadSpacesUseCase } from '../../use-cases';
import {TriggerActionUiPort} from "../../use-cases/ports/ui/trigger-action-ui.port";

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
      width: 100%;
      padding: 1rem .5rem;
    }
  `]
})
export class SpacesComponent {
  readonly action$ = this.handleActionUseCase.getActionData();
  readonly spaces$ = this.loadSpacesUseCase.loadSpaces();

  constructor(
    private readonly handleActionUseCase: HandleActionUiPort,
    private readonly triggerActionUseCase: TriggerActionUiPort,
    private readonly loadSpacesUseCase: LoadSpacesUseCase
  ) {

  }

  clearHistory() {
    this.triggerActionUseCase.triggerClearHistory();
  }
}
