import { SettingsApi } from '@architect-poc/settings/public/interfaces';
import { SpacesDataPort, SpacesUiPort, SpacesUseCase } from '@architect-poc/spaces/use-cases';
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
