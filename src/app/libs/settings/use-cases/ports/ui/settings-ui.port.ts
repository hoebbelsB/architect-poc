import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsType } from '../../../domain';

@Injectable()
export abstract class SettingsUiPort {
  abstract triggerAction(action: string): void;
  abstract getActionHistory(): Observable<string[]>;
  // TODO: add menuItems: Observable or clarify how we render different types otherwise
  abstract getActiveMenu(): Observable<SettingsType | null>;
}
