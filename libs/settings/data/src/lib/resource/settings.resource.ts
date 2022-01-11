import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsType } from '@architect-poc/settings/domain';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../../../../domain/src/lib/menu-item.model';

// helper function that simulates the response from the server
const createMenuItemArray = (type: SettingsType): MenuItem[] => {
  return new Array(10).fill(0).map((_, i) => ({
    id: `${i}`,
    name: `${type} menu item ${i}`,
  }));
};

@Injectable({ providedIn: 'root' })
export class SettingsResource {
  constructor(private readonly http: HttpClient) {}

  getMenuItems(type: SettingsType): Observable<MenuItem[]> {
    return of(createMenuItemArray(type));
  }
}
