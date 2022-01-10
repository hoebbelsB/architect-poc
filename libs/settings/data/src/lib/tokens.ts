import { SettingsApi } from './settings-api';
import {
  SettingsUseCase,
  SettingsDataPort,
  SettingsUiPort,
} from '@architect-poc/settings/use-cases';
import { SettingsStoreService } from './store/settings-store.service';

export const DATA_PROVIDERS = [
  {
    provide: SettingsDataPort,
    useExisting: SettingsStoreService,
  },
  {
    provide: SettingsApi,
    useExisting: SettingsStoreService,
  },
];

export const UI_PROVIDERS = [
  {
    provide: SettingsUiPort,
    useExisting: SettingsUseCase,
    deps: [SettingsDataPort],
  },
];
