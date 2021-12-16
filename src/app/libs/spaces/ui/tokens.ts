import { SpacesPort } from '../use-cases/ports/spaces-port.service';
import { SpacesOutputState } from './output-state/spaces-output-state.service';

export const UI_PROVIDERS = [
  { provide: SpacesPort, useExisting: SpacesOutputState },
];
