import { SettingsApi } from '../../settings/ui';
import { SpacesDataPort, SpacesUiPort, SpacesUseCase } from '../use-cases';
import { SpacesStoreService } from './store/spaces-store.service';

export const INFRASTRUCTURE_PROVIDERS = [
  {
    provide: SpacesDataPort,
    useExisting: SpacesStoreService,
    deps: [SettingsApi]
  },
];

export const APPLICATION_PROVIDERS = [
  {
    provide: SpacesUiPort,
    useExisting: SpacesUseCase,
    deps: [SpacesDataPort],
  },
];
