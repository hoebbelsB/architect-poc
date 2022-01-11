import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Space } from '@architect-poc/spaces/domain';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpacesResource {
  constructor(private readonly http: HttpClient) {}

  getSpaces(): Observable<Space[]> {
    return of(
      new Array(10).fill(0).map((_, i) => ({
        id: `${i}`,
        name: `space no ${i}`,
      }))
    );
  }
}
