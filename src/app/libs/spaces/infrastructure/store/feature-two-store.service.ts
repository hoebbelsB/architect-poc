import { Injectable } from '@angular/core';
// TODO: double-check import
import { SettingsStoreFacade } from '../../../global-store/settings-store-facade.service';
import { FeatureTwoDataPort } from '../../use-cases/ports/infrastructure/feature-two-data.port';

@Injectable({ providedIn: 'root' })
export class FeatureTwoStoreService implements FeatureTwoDataPort {
  constructor(private readonly featureTwoStoreFacade: SettingsStoreFacade) {}

  toggleState(): void {
    this.featureTwoStoreFacade.toggleState();
  }
}
