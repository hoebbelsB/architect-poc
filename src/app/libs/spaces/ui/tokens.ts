import { FeatureOnePort } from '../use-cases/ports/feature-one.port';
import { FeatureOneOutputState } from './output-state/feature-one-output.state';

export const UI_PROVIDERS = [
  { provide: FeatureOnePort, useExisting: FeatureOneOutputState },
];
