import { Injectable } from '@angular/core';
import { SettingsPort } from '../settings/ui';

@Injectable({ providedIn: 'root' })
export class FeatureTwoStoreFacade {
  constructor(private readonly featureTwoStore: SettingsPort) {}

  toggleState(): void {
    console.log('facade');
    this.featureTwoStore.setState(true);
  }
}
