import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Space } from '@architect-poc/spaces/domain';

@Injectable()
export abstract class SpacesFeatureState {
  abstract getSpaces(): Observable<Space[]>;
  abstract getAction(): Observable<string>;
  abstract showSpacesSettings(): void;
  abstract clearHistory(): void;
}
