import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardListItem } from '../../dashboard-feature.model';

@Injectable()
export abstract class DashboardAdapter {
  abstract dashboards$: Observable<DashboardListItem[]>;
  abstract showSettings(): void;
}
