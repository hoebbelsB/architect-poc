import { Injectable } from '@angular/core';

@Injectable()
export abstract class FeatureTwoDataPort {
  abstract toggleState(): void;
}
