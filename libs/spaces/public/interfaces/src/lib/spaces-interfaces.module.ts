import { ModuleWithProviders, NgModule } from '@angular/core';
import { UI_PROVIDERS, DATA_PROVIDERS } from '@architect-poc/spaces/data';

@NgModule({})
export class SpacesInterfacesModule {
  static forRoot(): ModuleWithProviders<SpacesInterfacesModule> {
    return {
      ngModule: SpacesInterfacesModule,
      providers: [...DATA_PROVIDERS, ...UI_PROVIDERS],
    };
  }
}
