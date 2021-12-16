import { Injectable } from '@angular/core';
import { SpacesDataPort } from './ports/infrastructure/spaces-data-port.service';
import { FeatureTwoUiPort } from './ports/ui/feature-two-ui.port';

@Injectable({ providedIn: 'root' })
export class FeatureTwoUseCase implements FeatureTwoUiPort {
  constructor(private readonly featureTwoDataPort: SpacesDataPort) {}

  setState(state: boolean): void {
    this.featureTwoDataPort.toggleState();
  }
}
