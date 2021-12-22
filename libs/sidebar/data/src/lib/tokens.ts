import { SidebarDataPort, SidebarUiPort, SidebarUseCase } from '@architect-poc/sidebar/use-cases';
import { SidebarStoreService } from './sidebar-store.service';

export const DATA_PROVIDERS = [
  {
    provide: SidebarDataPort,
    useExisting: SidebarStoreService,
  },
];

export const UI_PROVIDERS = [
  {
    provide: SidebarUiPort,
    useExisting: SidebarUseCase,
    deps: [SidebarDataPort],
  }
];
