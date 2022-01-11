import {
  DashboardFeatureState,
  DashboardAdapter,
  DashboardAdapterImpl,
} from '@architect-poc/dashboards/use-cases';
import { SettingsSharedFeatureState } from '@architect-poc/settings-public-state';
import { DashboardsStore } from './store/dashboards.store';

export const DATA_PROVIDERS = [
  {
    provide: DashboardFeatureState,
    useExisting: DashboardsStore,
    deps: [SettingsSharedFeatureState],
  },
];

export const UI_PROVIDERS = [
  {
    provide: DashboardAdapter,
    useExisting: DashboardAdapterImpl,
    deps: [DashboardFeatureState],
  },
];
