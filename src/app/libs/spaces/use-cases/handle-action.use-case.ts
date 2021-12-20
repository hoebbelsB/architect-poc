import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleActionUiPort } from './ports/ui/handle-action-ui-port.service';
import { SpacesDataPort } from './ports/infrastructure/spaces-data-port.service';

@Injectable({ providedIn: 'root' })
export class HandleActionUseCase implements HandleActionUiPort {
  constructor(
    private readonly spacesDataPort: SpacesDataPort,
  ) {}

  getActionData(): Observable<string> {
    return this.spacesDataPort.getAction();
  }

}
