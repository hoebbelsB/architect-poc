import { Injectable } from '@angular/core';
import { SpacesPort } from '../spaces/ui';

@Injectable({ providedIn: 'root' })
export class FeatureOneStoreFacade {
  constructor(private readonly featureOnePort: SpacesPort) {}

  toggleState(): void {
    this.featureOnePort.setState(true);
  }
}
