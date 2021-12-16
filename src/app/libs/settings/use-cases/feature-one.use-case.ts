import { Injectable } from '@angular/core';
import { FeatureOneDataPort } from '../../spaces/use-cases';
import { FeatureOneUiPort } from './ports/ui/feature-one-ui.port';

@Injectable({ providedIn: 'root' })
export class FeatureOneUseCase implements FeatureOneUiPort {
  constructor(private readonly featureOneDataPort: FeatureOneDataPort) {}

  setState(state: boolean): void {
    this.featureOneDataPort.toggleState();
  }
}
