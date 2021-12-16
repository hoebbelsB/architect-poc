import { Injectable } from '@angular/core';
// TODO: double-check import
import { SpacesDataPort } from '../../use-cases/ports/infrastructure/spaces-data-port.service';

@Injectable({ providedIn: 'root' })
export class SpacesStoreService implements SpacesDataPort {
  constructor() {}

  toggleState(): void {
  }
}
