import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { FeatureOneUiPort, HandleActionUiPort } from '../../use-cases';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  readonly state$ = this.settingsUseCase.getState();
  readonly currentState$ = this.state$.pipe(
    map(({ isFeatureTwoTrue }) => isFeatureTwoTrue)
  );

  constructor(
    private readonly settingsUseCase: HandleActionUiPort,
    private readonly featureOneUseCase: FeatureOneUiPort
  ) {}

  toggleState(): void {
    this.settingsUseCase.setState(true);
  }

  toggleOuterState(): void {
    this.featureOneUseCase.setState(true);
  }
}
