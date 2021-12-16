import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { FeatureOneUiPort, FeatureTwoUiPort } from '../../use-cases';

@Component({
  selector: 'my-feature-one',
  templateUrl: './feature-one.component.html',
})
export class FeatureOneComponent {
  readonly state$ = this.featureOneUseCase.getState();
  readonly currentState$ = this.state$.pipe(
    map(({ isFeatureOneTrue }) => isFeatureOneTrue)
  );

  constructor(
    private readonly featureOneUseCase: FeatureOneUiPort,
    private readonly featureTwoUseCase: FeatureTwoUiPort
  ) {}

  toggleState(): void {
    this.featureOneUseCase.setState(true);
  }

  toggleOuterState(): void {
    this.featureTwoUseCase.setState(true);
  }
}
