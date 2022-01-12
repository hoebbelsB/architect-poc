import { Injectable } from '@angular/core';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';
import { Space } from '@architect-poc/spaces/domain';

@Injectable()
export abstract class SpacesAdapter {
  abstract action$: Observable<Signal<string> | null>;
  abstract loadSpaces(): Observable<Space[]>;
  abstract showSettings(): void;
}
