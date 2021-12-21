import { SidebarDataPort, ShowSettingsUiPort, ShowSettingsUseCase } from '../use-cases';
import { SidebarStoreService } from './sidebar-store.service';

export const INFRASTRUCTURE_PROVIDERS = [
  {
    provide: SidebarDataPort,
    useExisting: SidebarStoreService,
  },
];

export const APPLICATION_PROVIDERS = [
  {
    provide: ShowSettingsUiPort,
    useExisting: ShowSettingsUseCase,
    deps: [SidebarDataPort],
  }
];
