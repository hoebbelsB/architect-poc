import { Component } from '@angular/core';
import { HandleActionUiPort } from '../../use-cases';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
})
export class SpacesComponent {
  readonly state$ = this.handleActionUseCase.getActionData();

  constructor(
    private readonly handleActionUseCase: HandleActionUiPort,
  ) {}
}
