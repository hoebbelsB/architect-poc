import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import { SpacesPort } from '../../use-cases/ports/spaces-port.service';

@Injectable({ providedIn: 'root' })
export class SpacesOutputState implements SpacesPort {
  private readonly state$ = new Subject<boolean>();
  private readonly _clearHistoryTriggered$ = new BehaviorSubject<any>('test');
  readonly clearActionHistory$ = this._clearHistoryTriggered$.asObservable();


  setState(state: boolean): void {
    this.state$.next(state);
  }

  getState(): Observable<boolean> {
    return this.state$.asObservable();
  }

  triggerClearAction(): void {
    console.log('SpacesOutputState')
    this._clearHistoryTriggered$.next('test2');
  }
}
