import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { HandleActionUiPort } from '../../use-cases';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {

  constructor(
    private readonly settingsUseCase: HandleActionUiPort
  ) {}

  triggerAction(action: string): void {
    this.settingsUseCase.triggerAction(action);
  }

}
