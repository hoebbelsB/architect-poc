import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SidebarFeatureState {
  abstract getAction(): Observable<string>;
  abstract showSidebarSettings(): void;
}
