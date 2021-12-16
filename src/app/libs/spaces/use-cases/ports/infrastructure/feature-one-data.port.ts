import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureOneStateModel } from '../../../domain';

@Injectable()
export abstract class FeatureOneDataPort {
  abstract toggleState(): void;
  abstract featureOneState$: Observable<FeatureOneStateModel>;
}
