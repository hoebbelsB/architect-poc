import {
  SettingsDataPort, SettingsUiPort, SettingsAdapter,
} from '../use-cases';
import { SettingsStoreService } from './store/settings-store.service';
import { SettingsApi } from '../public/interfaces';

export const DATA_PROVIDERS = [
  {
    provide: SettingsDataPort,
    useExisting: SettingsStoreService,
  },
  {
    provide: SettingsApi,
    useExisting: SettingsStoreService,
  }
];

export const UI_PROVIDERS = [
  {
    provide: SettingsUiPort,
    useExisting: SettingsAdapter,
    deps: [SettingsDataPort],
  },
];
