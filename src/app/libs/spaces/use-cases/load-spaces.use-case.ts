import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Space } from '../domain';
import { SpacesDataPort } from './ports/infrastructure/spaces-data.port';
import { LoadSpacesUiPort } from './ports/ui/load-spaces-ui.port';

@Injectable({ providedIn: 'root' })
export class LoadSpacesUseCase implements LoadSpacesUiPort {

  constructor(
    private spacesData: SpacesDataPort
  ) {}

  loadSpaces(): Observable<Space[]> {
    return this.spacesData.getSpaces();
  }
}
