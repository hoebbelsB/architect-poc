import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsStateModel } from '../../../domain';

@Injectable()
export abstract class HandleActionUiPort {
  abstract getState(): Observable<SettingsStateModel>;
  abstract setState(state: boolean): void;
}
