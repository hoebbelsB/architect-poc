import { Injectable } from '@angular/core';
import { FeatureOneStoreFacade } from '../../../global-store/feature-one-store.facade';
import { FeatureOneDataPort } from '../../use-cases';

@Injectable({ providedIn: 'root' })
export class FeatureOneStoreService implements FeatureOneDataPort {
  constructor(private readonly featureOneStoreFacade: FeatureOneStoreFacade) {}

  toggleState(): void {
    this.featureOneStoreFacade.toggleState();
  }
}
