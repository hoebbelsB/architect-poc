import { ModuleWithProviders, NgModule } from '@angular/core';
import { DATA_PROVIDERS, UI_PROVIDERS } from '@architect-poc/settings/data';

@NgModule({})
export class SettingsPublicStateModule {
  static forRoot(): ModuleWithProviders<SettingsPublicStateModule> {
    return {
      ngModule: SettingsPublicStateModule,
      providers: [...DATA_PROVIDERS, ...UI_PROVIDERS],
    };
  }
}
