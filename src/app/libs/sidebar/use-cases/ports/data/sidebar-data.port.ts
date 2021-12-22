import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SidebarDataPort {
  abstract getAction(): Observable<string>;
  abstract showSidebarSettings(): void;
}
