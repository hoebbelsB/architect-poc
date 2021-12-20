import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Space } from '../../../domain/entities';

@Injectable()
export abstract class LoadSpacesPort {
  abstract loadSpaces(): Observable<Space[]>;
}
