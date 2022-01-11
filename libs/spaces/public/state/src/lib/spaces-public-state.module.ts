import { ModuleWithProviders, NgModule } from '@angular/core';
import { UI_PROVIDERS, DATA_PROVIDERS } from '@architect-poc/spaces/data';

@NgModule({})
export class SpacesPublicStateModule {
  static forRoot(): ModuleWithProviders<SpacesPublicStateModule> {
    return {
      ngModule: SpacesPublicStateModule,
      providers: [...DATA_PROVIDERS, ...UI_PROVIDERS],
    };
  }
}
