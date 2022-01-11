import { HttpClient } from '@angular/common/http';
import { Dashboard } from '@architect-poc/dashboards/domain';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DashboardResource {
  constructor(private http: HttpClient) {}

  getDashboards(): Observable<Dashboard[]> {
    return of(
      new Array(10).fill(0).map((_, i) => ({
        id: `${i}`,
        name: `dashboard no ${i}`,
      }))
    );
  }
}
