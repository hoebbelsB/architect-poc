import { Injectable } from '@angular/core';
import { Signal } from '@architect-poc/utils';
import { Observable } from 'rxjs';
import { DashboardListItem } from '../../dashboard-feature.model';

@Injectable()
export abstract class DashboardAdapter {
  abstract dashboards$: Observable<DashboardListItem[]>;
  abstract action$: Observable<Signal<string> | null>;
  abstract showSettings(): void;
}
