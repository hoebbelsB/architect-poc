import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export abstract class SettingsDataPort {
  abstract getAction(): Observable<string>;
}
