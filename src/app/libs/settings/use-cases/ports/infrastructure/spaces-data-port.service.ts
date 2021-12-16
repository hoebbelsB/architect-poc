import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SpacesDataPort {
    abstract clearHistory$: Observable<void>;
}
