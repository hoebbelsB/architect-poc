import {
  HandleActionUiPort,
  HandleActionUseCase,
  SettingsDataPort,
  ShowMenuUiPort,
  ShowMenuUseCase
} from '../use-cases';
import { SettingsStoreService } from './store/settings-store.service';
import { SettingsApi } from './settings.api';

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
    provide: HandleActionUiPort,
    useExisting: HandleActionUseCase,
    deps: [SettingsDataPort],
  },
  {
    provide: ShowMenuUiPort,
    useExisting: ShowMenuUseCase,
    deps: [SettingsDataPort]
  }
];
