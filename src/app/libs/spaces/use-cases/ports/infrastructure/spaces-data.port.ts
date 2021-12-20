import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Space } from '../../../domain/entities';

@Injectable()
export abstract class SpacesDataPort {
  abstract getSpaces(): Observable<Space[]>;
  abstract getAction(): Observable<string>;
  abstract clearHistory(): void;
}
