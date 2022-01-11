import { SettingsSharedFeatureState } from '@architect-poc/settings-public-state';
import {
  SpacesFeatureState,
  SpacesAdapter,
  SpacesUseCase,
} from '@architect-poc/spaces/use-cases';
import { SpacesStore } from './store/spaces.store';

export const DATA_PROVIDERS = [
  {
    provide: SpacesFeatureState,
    useExisting: SpacesStore,
    deps: [SettingsSharedFeatureState],
  },
];

export const UI_PROVIDERS = [
  {
    provide: SpacesAdapter,
    useExisting: SpacesUseCase,
    deps: [SpacesFeatureState],
  },
];
