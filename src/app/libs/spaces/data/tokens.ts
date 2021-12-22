import { SettingsApi } from '../../settings/public/interfaces/index';
import { SpacesDataPort, SpacesUiPort, SpacesUseCase } from '../use-cases';
import { SpacesStoreService } from './store/spaces-store.service';

export const DATA_PROVIDERS = [
  {
    provide: SpacesDataPort,
    useExisting: SpacesStoreService,
    deps: [SettingsApi]
  },
];

export const UI_PROVIDERS = [
  {
    provide: SpacesUiPort,
    useExisting: SpacesUseCase,
    deps: [SpacesDataPort],
  },
];
