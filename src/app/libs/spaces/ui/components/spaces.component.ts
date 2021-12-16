import { Component } from '@angular/core';
import { HandleActionUiPort } from '../../use-cases';
import {TriggerActionUiPort} from "../../use-cases/ports/ui/trigger-action-ui.port";

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
})
export class SpacesComponent {
  readonly state$ = this.handleActionUseCase.getActionData();

  constructor(
    private readonly handleActionUseCase: HandleActionUiPort,
    private readonly triggerActionUseCase: TriggerActionUiPort
  ) {}

  clearHistory() {
    console.log('SpacesComponent')
    this.triggerActionUseCase.triggerClearHistory();
  }
}
