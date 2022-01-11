import { SettingsSharedFeatureState } from './settings-shared.state';
import {
  SettingsUseCase,
  SettingsFeatureState,
  SettingsAdapter,
} from '@architect-poc/settings/use-cases';
import { SettingsSharedStore } from './store/settings-shared.store';
import { SettingsStore } from './store/settings.store';

export const DATA_PROVIDERS = [
  {
    provide: SettingsFeatureState,
    useExisting: SettingsStore,
  },
  {
    provide: SettingsSharedFeatureState,
    useExisting: SettingsSharedStore,
  },
];

export const UI_PROVIDERS = [
  {
    provide: SettingsAdapter,
    useExisting: SettingsUseCase,
    deps: [SettingsFeatureState],
  },
];
