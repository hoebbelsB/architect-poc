import { Injectable } from '@angular/core';
import { SettingsType } from '@architect-poc/settings/domain';
import { Observable } from 'rxjs';

@Injectable()
// TODO: consider `PresenterPattern` when teaching
// we have very good articles from lars
export abstract class SettingsUiPort {
  abstract triggerAction(action: string): void;
  abstract actionHistory$: Observable<string[]>;
  // TODO: add menuItems$: Observable or clarify how we render different types otherwise
  abstract activeMenu$: Observable<SettingsType | null>;
}
