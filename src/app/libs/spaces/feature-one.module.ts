import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  APPLICATION_PROVIDERS,
  INFRASTRUCTURE_PROVIDERS,
} from './infrastructure';
import { UiModule, UI_PROVIDERS } from './ui';

@NgModule({
  exports: [UiModule],
  // check if we need this
  imports: [UiModule],
})
export class FeatureOneModule {
  static forRoot(): ModuleWithProviders<FeatureOneModule> {
    return {
      ngModule: FeatureOneModule,
      providers: [
        ...INFRASTRUCTURE_PROVIDERS,
        ...APPLICATION_PROVIDERS,
        ...UI_PROVIDERS,
      ],
    };
  }
}
