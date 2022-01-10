import {
  DashboardsDataPort,
  DashboardsUiPort,
  DashboardsUseCase,
} from '@architect-poc/dashboards/use-cases';
import { SettingsSharedState } from '@architect-poc/settings/public/interfaces';
import { DashboardsStoreService } from './store/dashboards-store.service';

export const DATA_PROVIDERS = [
  {
    provide: DashboardsDataPort,
    useExisting: DashboardsStoreService,
    deps: [SettingsSharedState],
  },
];

export const UI_PROVIDERS = [
  {
    provide: DashboardsUiPort,
    useExisting: DashboardsUseCase,
    deps: [DashboardsDataPort],
  },
];
