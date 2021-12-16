import {
  FeatureOneUiPort,
  FeatureOneUseCase,
  FeatureTwoUiPort,
  FeatureTwoUseCase,
} from '../use-cases';
import { FeatureOneDataPort } from '../use-cases/ports/infrastructure/feature-one-data.port';
import { FeatureTwoDataPort } from '../use-cases/ports/infrastructure/feature-two-data.port';
import { FeatureOneStoreService } from './store/feature-one-store.service';
import { FeatureTwoStoreService } from './store/feature-two-store.service';

export const INFRASTRUCTURE_PROVIDERS = [
  {
    provide: FeatureOneDataPort,
    useExisting: FeatureOneStoreService,
  },
  {
    provide: FeatureTwoDataPort,
    useExisting: FeatureTwoStoreService,
  },
];

export const APPLICATION_PROVIDERS = [
  { provide: FeatureTwoUiPort, useExisting: FeatureTwoUseCase },
  {
    provide: FeatureOneUiPort,
    useExisting: FeatureOneUseCase,
    deps: [FeatureOneDataPort, FeatureTwoDataPort],
  },
];
