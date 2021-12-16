import { Injectable } from '@angular/core';

@Injectable()
export abstract class FeatureOneUiPort {
  abstract setState(state: boolean): void;
}
