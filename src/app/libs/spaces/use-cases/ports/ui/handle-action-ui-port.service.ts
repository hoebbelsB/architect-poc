import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class HandleActionUiPort {
  abstract getActionData(): Observable<string>;
}
