
import { DashboardsDataPort, DashboardsUiPort, DashboardsUseCase } from '@architect-poc/dashboards/use-cases';
import { SettingsApi } from '../../../../../apps/architect-poc/src/app/libs/settings/public/interfaces/index';
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