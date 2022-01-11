import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '@architect-poc/dashboards/domain';

@Injectable()
export abstract class DashboardAdapter {
  abstract loadDashboards(): Observable<Dashboard[]>;
  abstract showSettings(): void;
}
