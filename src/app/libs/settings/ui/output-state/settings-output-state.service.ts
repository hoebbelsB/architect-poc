import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SettingsPort } from '../../use-cases';

@Injectable({ providedIn: 'root' })
export class SettingsOutputState implements SettingsPort {
  private readonly _actionTriggered$ = new Subject<string>();
  readonly actionTriggered$ = this._actionTriggered$.asObservable();

  triggerAction(action: string): void {
    this._actionTriggered$.next(action);
  }
}
