import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsStateModel } from '../../../domain';

@Injectable()
export abstract class HandleActionUiPort {
  abstract triggerAction(action: string): void;
}
