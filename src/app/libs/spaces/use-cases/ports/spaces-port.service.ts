import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SpacesPort {
  abstract getState(): Observable<boolean>;
  abstract setState(state: boolean): void;
}
