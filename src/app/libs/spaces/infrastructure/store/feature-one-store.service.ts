import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FeatureOneStateModel } from '../../domain';
import { FeatureOneDataPort } from '../../use-cases/ports/infrastructure/feature-one-data.port';

// rename to: FeatureOneLocalStateService or something similar
@Injectable({ providedIn: 'root' })
export class FeatureOneStoreService implements FeatureOneDataPort {
  readonly initialState: FeatureOneStateModel = {
    isFeatureOneTrue: false,
  };

  readonly featureOneState$ = new BehaviorSubject<FeatureOneStateModel>(
    this.initialState
  );

  toggleState(): void {
    this.featureOneState$.next({
      ...this.initialState,
      isFeatureOneTrue: !this.featureOneState$.value.isFeatureOneTrue,
    });
  }
}
