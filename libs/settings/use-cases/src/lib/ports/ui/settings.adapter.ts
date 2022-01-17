import { Injectable } from '@angular/core';
import { SettingsType } from '@architect-poc/settings/domain';
import { MenuItem, Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SettingsAdapter {
  abstract triggerAction(action: string, type: SettingsType): void;
  abstract actionHistory$: Observable<string[]>;
  // TODO: add menuItems$: Observable or clarify how we render different types otherwise
  abstract activeMenu$: Observable<Signal<SettingsType>>;
  abstract showMenu$: Observable<boolean>;
  abstract menuItems$: Observable<MenuItem[]>;
}
