import { Injectable } from '@angular/core';

@Injectable()
export abstract class TriggerActionUiPort {
  abstract triggerClearHistory(): void;
}
