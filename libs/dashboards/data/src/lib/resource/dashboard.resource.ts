import { HttpClient } from '@angular/common/http';
import { DashboardModel } from '@architect-poc/dashboards/domain';
import { map, Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { DashboardGetDto } from './dashboard.dto';
import { clientToServerPost, serverToClient } from './dashboard.mapper';

const serverResponse: DashboardGetDto = { id: 'asasdasd', name: 'asdas', creationDate: '45466', deletionDate: '6564654'};

const serverGetResult: DashboardGetDto[] = new Array(10).fill(0).map((_, i) => ({
  id: `${i}`,
  name: `dashboard no ${i}`,
  creationDate: '5465465',
  deletionDate: '65465643',
}));

@Injectable({providedIn: 'root'})
export class DashboardResource {
  constructor(private http: HttpClient) {
  }

  getDashboards(): Observable<DashboardModel[]> {
    return of(serverGetResult).pipe(
      map(result => result.map(serverToClient))
    );
  }

  postDashboard(dashboard: DashboardModel): Observable<DashboardModel> {
    const serverRequest = clientToServerPost(dashboard);
    serverRequest; // just here to avoid unused variable linting error
    return of(serverResponse).pipe(map(serverToClient));
  }
}
