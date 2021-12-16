import {
  FeatureOneUiPort,
  FeatureOneUseCase,
  HandleActionUiPort,
  HandleActionUseCase,
  FeatureOneDataPort,
  SettingsDataPort,
} from '../use-cases';
import { FeatureOneStoreService } from './store/feature-one-store.service';
import { SettingsStoreService } from './store/settings-store.service';

export const INFRASTRUCTURE_PROVIDERS = [
  {
    provide: FeatureOneDataPort,
    useExisting: FeatureOneStoreService,
  },
  {
    provide: SettingsDataPort,
    useExisting: SettingsStoreService,
  },
];

export const APPLICATION_PROVIDERS = [
  { provide: FeatureOneUiPort, useExisting: FeatureOneUseCase },
  {
    provide: HandleActionUiPort,
    useExisting: HandleActionUseCase,
    deps: [SettingsDataPort, FeatureOneDataPort],
  },
];
