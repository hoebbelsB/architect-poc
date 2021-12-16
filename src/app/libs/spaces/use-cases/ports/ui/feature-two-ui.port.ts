import { Injectable } from '@angular/core';

@Injectable()
export abstract class FeatureTwoUiPort {
  abstract setState(state: boolean): void;
}
