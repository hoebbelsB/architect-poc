import {
  HandleActionUiPort,
  HandleActionUseCase,
  SettingsDataPort,
} from '../use-cases';
import { SettingsStoreService } from './store/settings-store.service';

export const INFRASTRUCTURE_PROVIDERS = [
  {
    provide: SettingsDataPort,
    useExisting: SettingsStoreService,
  },
];

export const APPLICATION_PROVIDERS = [
  {
    provide: HandleActionUiPort,
    useExisting: HandleActionUseCase,
    deps: [SettingsDataPort],
  },
];
