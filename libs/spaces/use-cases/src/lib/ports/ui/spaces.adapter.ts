import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Space } from '@architect-poc/spaces/domain';

@Injectable()
export abstract class SpacesAdapter {
  abstract settingsActions$: Observable<string>;
  abstract loadSpaces(): Observable<Space[]>;
  abstract showSettings(): void;
  abstract triggerClearHistory(): void;
}
