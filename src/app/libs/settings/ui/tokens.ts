import { SettingsPort } from '../use-cases';
import { SettingsOutputState } from './output-state/settings-output-state.service';

export const UI_PROVIDERS = [
  { provide: SettingsPort, useExisting: SettingsOutputState },
];
