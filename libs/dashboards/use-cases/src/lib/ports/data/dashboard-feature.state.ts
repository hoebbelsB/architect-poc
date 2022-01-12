import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardModel } from '@architect-poc/dashboards/domain';

@Injectable()
export abstract class DashboardFeatureState {
  abstract dashboards$: Observable<DashboardModel[]>;
  abstract showDashboardSettings(): void;
}
