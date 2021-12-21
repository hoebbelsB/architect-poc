import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  APPLICATION_PROVIDERS,
  INFRASTRUCTURE_PROVIDERS,
} from './infrastructure';
import { SpacesUiModule } from './ui';

@NgModule({
  exports: [SpacesUiModule],
  // check if we need this
  imports: [SpacesUiModule],
})
export class SpacesModule {
  static forRoot(): ModuleWithProviders<SpacesModule> {
    return {
      ngModule: SpacesModule,
      providers: [
        ...INFRASTRUCTURE_PROVIDERS,
        ...APPLICATION_PROVIDERS,
      ],
    };
  }
}
