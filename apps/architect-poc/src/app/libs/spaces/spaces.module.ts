import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  UI_PROVIDERS,
  DATA_PROVIDERS,
} from './data';
import { SpacesUiModule } from './public/ui';

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
        ...DATA_PROVIDERS,
        ...UI_PROVIDERS,
      ],
    };
  }
}
