import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SpacesPort } from '../../use-cases/ports/spaces-port.service';

@Injectable({ providedIn: 'root' })
export class SpacesOutputState implements SpacesPort {
  private readonly state$ = new Subject<boolean>();

  setState(state: boolean): void {
    this.state$.next(state);
  }

  getState(): Observable<boolean> {
    return this.state$.asObservable();
  }
}
