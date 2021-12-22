import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../../../domain';

@Injectable()
export abstract class DashboardsDataPort {
  abstract getDashboards(): Observable<Dashboard[]>;
  abstract showDashboardSettings(): void;
}
