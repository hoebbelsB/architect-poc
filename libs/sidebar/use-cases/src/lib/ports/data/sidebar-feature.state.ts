import { Injectable } from '@angular/core';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SidebarFeatureState {
  abstract action$: Observable<Signal<string> | null>;
  abstract showSidebarSettings(): void;
}
