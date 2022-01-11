import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '@architect-poc/dashboards/domain';

@Injectable()
export abstract class DashboardFeatureState {
  abstract getDashboards(): Observable<Dashboard[]>;
  abstract showDashboardSettings(): void;
}
