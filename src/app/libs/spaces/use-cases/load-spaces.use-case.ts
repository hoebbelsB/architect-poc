import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Space } from '../domain/entities';
import { SpacesDataPort } from './ports/infrastructure/spaces-data.port';
import { LoadSpacesPort } from './ports/ui/load-spaces.port';

@Injectable({ providedIn: 'root' })
export class LoadSpacesUseCase implements LoadSpacesPort {

  constructor(
    private spacesData: SpacesDataPort
  ) {}

  loadSpaces(): Observable<Space[]> {
    return this.spacesData.getSpaces();
  }
}
