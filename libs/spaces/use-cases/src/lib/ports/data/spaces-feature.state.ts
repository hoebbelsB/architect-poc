import { Injectable } from '@angular/core';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';
import { Space } from '@architect-poc/spaces/domain';

@Injectable()
export abstract class SpacesFeatureState {
  abstract action$: Observable<Signal<string> | null>;
  abstract getSpaces(): Observable<Space[]>;
  abstract showSpacesSettings(): void;
}
