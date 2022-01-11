import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({})
export class SpacesPublicStateModule {
  static forRoot(): ModuleWithProviders<SpacesPublicStateModule> {
    return {
      ngModule: SpacesPublicStateModule,
      providers: [],
    };
  }
}
