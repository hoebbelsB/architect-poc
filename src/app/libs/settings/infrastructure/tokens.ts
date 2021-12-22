import {
  SettingsDataPort, SettingsUiPort, SettingsUseCase,
} from '../use-cases';
import { SettingsStoreService } from './store/settings-store.service';
import { SettingsApi } from '../ui';

export const INFRASTRUCTURE_PROVIDERS = [
  {
    provide: SettingsDataPort,
    useExisting: SettingsStoreService,
  },
  {
    provide: SettingsApi,
    useExisting: SettingsStoreService,
  }
];

export const APPLICATION_PROVIDERS = [
  {
    provide: SettingsUiPort,
    useExisting: SettingsUseCase,
    deps: [SettingsDataPort],
  },
];
