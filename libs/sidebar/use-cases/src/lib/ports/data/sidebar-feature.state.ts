import { Injectable } from '@angular/core';

@Injectable()
export abstract class SidebarFeatureState {
  abstract showSidebarSettings(): void;
}
