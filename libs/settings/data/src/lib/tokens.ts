import { SettingsSharedState } from './settings-api';
import { SettingsGlobalState } from '@architect-poc/settings/use-cases';
import { SettingsStoreService } from './store/settings-store.service';

export const DATA_PROVIDERS = [
  {
    provide: SettingsGlobalState,
    useExisting: SettingsStoreService,
  },
  {
    provide: SettingsSharedState,
    useExisting: SettingsStoreService,
  },
];

export const UI_PROVIDERS = [];
