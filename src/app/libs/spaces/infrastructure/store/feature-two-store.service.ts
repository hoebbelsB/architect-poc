import { Injectable } from '@angular/core';
// TODO: double-check import
import { FeatureTwoStoreFacade } from '../../../global-store/feature-two-store.facade';
import { FeatureTwoDataPort } from '../../use-cases/ports/infrastructure/feature-two-data.port';

@Injectable({ providedIn: 'root' })
export class FeatureTwoStoreService implements FeatureTwoDataPort {
  constructor(private readonly featureTwoStoreFacade: FeatureTwoStoreFacade) {}

  toggleState(): void {
    this.featureTwoStoreFacade.toggleState();
  }
}
