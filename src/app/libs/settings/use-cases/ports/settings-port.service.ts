import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SettingsPort {
  abstract triggerAction(action: string): void;
  abstract actionTriggered$: Observable<string>;
}
