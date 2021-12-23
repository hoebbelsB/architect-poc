import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Space } from '@architect-poc/spaces/domain';

@Injectable()
export abstract class SpacesUiPort {
  abstract getActionData(): Observable<string>;
  abstract loadSpaces(): Observable<Space[]>;
  abstract showSettings(): void;
  abstract triggerClearHistory(): void;
}
