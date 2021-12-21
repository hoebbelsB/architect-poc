import { SettingsApi } from '../../settings/infrastructure';
import {
  HandleActionUiPort,
  HandleActionUseCase, LoadSpacesUiPort, LoadSpacesUseCase, ShowSettingsUiPort, ShowSettingsUseCase,
  TriggerActionUiPort,
  TriggerActionUseCase,
} from '../use-cases';
import { SpacesDataPort } from '../use-cases';
import { SpacesStoreService } from './store/spaces-store.service';

export const INFRASTRUCTURE_PROVIDERS = [
  {
    provide: SpacesDataPort,
    useExisting: SpacesStoreService,
  },
];

export const APPLICATION_PROVIDERS = [
  {
    provide: TriggerActionUiPort,
    useExisting: TriggerActionUseCase,
    deps: [SpacesDataPort],
  },
  {
    provide: HandleActionUiPort,
    useExisting: HandleActionUseCase,
    deps: [SpacesDataPort],
  },
  {
    provide: LoadSpacesUiPort,
    useExisting: LoadSpacesUseCase,
    deps: [SpacesDataPort]
  },
  {
    provide: ShowSettingsUiPort,
    useExisting: ShowSettingsUseCase,
    deps: [SettingsApi]
  }
];
