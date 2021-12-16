import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureOneStateModel } from '../domain/feature-one-state.model';
import { FeatureOneDataPort } from './ports/infrastructure/feature-one-data.port';
import { FeatureTwoDataPort } from './ports/infrastructure/feature-two-data.port';
import { FeatureOneUiPort } from './ports/ui/feature-one-ui.port';

@Injectable({ providedIn: 'root' })
export class FeatureOneUseCase implements FeatureOneUiPort {
  constructor(
    private readonly featureOneDataPort: FeatureOneDataPort,
    private readonly featureTwoDataPort: FeatureTwoDataPort
  ) {}

  getState(): Observable<FeatureOneStateModel> {
    return this.featureOneDataPort.featureOneState$;
  }

  setState(state: boolean): void {
    this.featureOneDataPort.toggleState();
  }
}
