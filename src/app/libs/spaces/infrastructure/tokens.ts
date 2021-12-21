import { SettingsApi } from '../../settings/infrastructure/settings.api';
import {
  HandleActionUiPort,
  HandleActionUseCase, LoadSpacesPort, LoadSpacesUseCase, ShowSettingsUiPort, ShowSettingsUseCase,
  TriggerActionUiPort,
  TriggerActionUseCase,
} from '../use-cases';
import { SpacesDataPort } from '../use-cases/ports/infrastructure/spaces-data.port';
import {SpacesStoreService} from "./store/spaces-store.service";

export const INFRASTRUCTURE_PROVIDERS = [
  {
    provide: SpacesDataPort,
    useExisting: SpacesStoreService,
  },
];

export const APPLICATION_PROVIDERS = [
  { provide: TriggerActionUiPort, useExisting: TriggerActionUseCase, deps: [SpacesDataPort], },
  {
    provide: HandleActionUiPort,
    useExisting: HandleActionUseCase,
    deps: [SpacesDataPort],
  },
  {
    provide: LoadSpacesPort,
    useExisting: LoadSpacesUseCase,
    deps: [SpacesDataPort]
  },
  {
    provide: ShowSettingsUiPort,
    useExisting: ShowSettingsUseCase,
    deps: [SettingsApi]
  }
];
