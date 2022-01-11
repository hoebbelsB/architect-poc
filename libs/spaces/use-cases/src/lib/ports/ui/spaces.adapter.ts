import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Space } from '../../../../../domain/src/lib/index';

@Injectable()
export abstract class SpacesAdapter {
  abstract getActionData(): Observable<string>;
  abstract loadSpaces(): Observable<Space[]>;
  abstract showSettings(): void;
  abstract triggerClearHistory(): void;
}
