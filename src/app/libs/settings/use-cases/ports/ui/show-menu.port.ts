import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsType } from '../../../domain/settings-type';

@Injectable()
export abstract class ShowMenuPort {
  // TODO: add menuItems: Observable or clarify how we render different types otherwise
  abstract getActiveMenu(): Observable<SettingsType | null>;
}
