import {
  HandleActionUiPort,
  HandleActionUseCase,
  FeatureTwoUiPort,
  FeatureTwoUseCase,
} from '../use-cases';
import { SettingsDataPort } from '../use-cases/ports/infrastructure/settings-data-port.service';
import { SpacesDataPort } from '../use-cases/ports/infrastructure/spaces-data-port.service';
import { SettingsStoreService } from './store/settings-store.service';
import {SpacesStoreService} from "./store/spaces-store.service";

export const INFRASTRUCTURE_PROVIDERS = [
  {
    provide: SettingsDataPort,
    useExisting: SettingsStoreService,
  },
  {
    provide: SpacesDataPort,
    useExisting: SpacesStoreService,
  },
];

export const APPLICATION_PROVIDERS = [
  { provide: FeatureTwoUiPort, useExisting: FeatureTwoUseCase },
  {
    provide: HandleActionUiPort,
    useExisting: HandleActionUseCase,
    deps: [SettingsDataPort, SpacesDataPort],
  },
];
