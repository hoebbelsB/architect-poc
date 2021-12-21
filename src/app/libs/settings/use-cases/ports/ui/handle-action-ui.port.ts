import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class HandleActionUiPort {
  abstract triggerAction(action: string): void;
  abstract getActionHistory(): Observable<string[]>;
}
