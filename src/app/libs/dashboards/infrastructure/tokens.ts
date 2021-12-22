import { SettingsApi } from '../../settings/ui';
import { DashboardsDataPort, DashboardsUiPort, DashboardsUseCase } from '../use-cases';
import { DashboardsStoreService } from './store/dashboards-store.service';

export const INFRASTRUCTURE_PROVIDERS = [
  {
    provide: DashboardsDataPort,
    useExisting: DashboardsStoreService,
    deps: [SettingsApi]
  }
];

export const APPLICATION_PROVIDERS = [
  {
    provide: DashboardsUiPort,
    useExisting: DashboardsUseCase,
    deps: [DashboardsDataPort]
  }
];
