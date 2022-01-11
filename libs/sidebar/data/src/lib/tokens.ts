import {
  SidebarFeatureState,
  SidebarAdapter,
  SidebarUseCase,
} from '@architect-poc/sidebar/use-cases';
import { SidebarStore } from './store/sidebar.store';

export const DATA_PROVIDERS = [
  {
    provide: SidebarFeatureState,
    useExisting: SidebarStore,
  },
];

export const UI_PROVIDERS = [
  {
    provide: SidebarAdapter,
    useExisting: SidebarUseCase,
    deps: [SidebarFeatureState],
  },
];
