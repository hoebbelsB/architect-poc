import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({})
export class SettingsPublicStateModule {
  static forRoot(): ModuleWithProviders<SettingsPublicStateModule> {
    return {
      ngModule: SettingsPublicStateModule,
      providers: [],
    };
  }
}
