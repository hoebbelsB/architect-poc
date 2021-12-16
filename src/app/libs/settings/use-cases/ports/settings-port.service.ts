import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SettingsPort {
  abstract getState(): Observable<boolean>;
  abstract setState(state: boolean): void;
}
