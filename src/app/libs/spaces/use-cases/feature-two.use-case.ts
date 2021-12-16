import { Injectable } from '@angular/core';
import { FeatureTwoDataPort } from './ports/infrastructure/feature-two-data.port';
import { FeatureTwoUiPort } from './ports/ui/feature-two-ui.port';

@Injectable({ providedIn: 'root' })
export class FeatureTwoUseCase implements FeatureTwoUiPort {
  constructor(private readonly featureTwoDataPort: FeatureTwoDataPort) {}

  setState(state: boolean): void {
    this.featureTwoDataPort.toggleState();
  }
}
