import {
  HandleActionUiPort,
  HandleActionUseCase,
  TriggerActionUiPort,
  TriggerActionUseCase,
} from '../use-cases';
import { SpacesDataPort } from '../use-cases/ports/infrastructure/spaces-data-port.service';
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
];
