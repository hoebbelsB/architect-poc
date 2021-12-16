import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureOneStateModel } from '../../../domain';

@Injectable()
export abstract class FeatureOneUiPort {
  abstract getState(): Observable<FeatureOneStateModel>;
  abstract setState(state: boolean): void;
}
