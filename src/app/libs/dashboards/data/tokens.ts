import { SettingsApi } from '../../settings/ui';
import { DashboardsDataPort, DashboardsUiPort, DashboardsUseCase } from '../use-cases';
import { DashboardsStoreService } from './store/dashboards-store.service';

export const DATA_PROVIDERS = [
  {
    provide: DashboardsDataPort,
    useExisting: DashboardsStoreService,
    deps: [SettingsApi]
  }
];

export const UI_PROVIDERS = [
  {
    provide: DashboardsUiPort,
    useExisting: DashboardsUseCase,
    deps: [DashboardsDataPort]
  }
];
