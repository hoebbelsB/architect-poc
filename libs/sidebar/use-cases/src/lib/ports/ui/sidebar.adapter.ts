import { Injectable } from '@angular/core';

@Injectable()
export abstract class SidebarAdapter {
  abstract showSettings(): void;
}
