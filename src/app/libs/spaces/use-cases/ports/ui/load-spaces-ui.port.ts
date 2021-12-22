import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Space } from '../../../domain';

@Injectable()
export abstract class LoadSpacesUiPort {
  abstract loadSpaces(): Observable<Space[]>;
}
