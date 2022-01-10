import { ModuleWithProviders, NgModule } from '@angular/core';
import { DATA_PROVIDERS, UI_PROVIDERS } from '@architect-poc/settings/data';

@NgModule({})
export class SettingsInterfacesModule {
  static forRoot(): ModuleWithProviders<SettingsInterfacesModule> {
    return {
      ngModule: SettingsInterfacesModule,
      providers: [...DATA_PROVIDERS, ...UI_PROVIDERS],
    };
  }
}
