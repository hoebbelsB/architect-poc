import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FeatureOnePort } from '../../use-cases/ports/feature-one.port';

@Injectable({ providedIn: 'root' })
export class FeatureOneOutputState implements FeatureOnePort {
  private readonly state$: Subject<boolean>;

  setState(state: boolean): void {
    this.state$.next(state);
  }

  getState(): Observable<boolean> {
    return this.state$;
  }
}
