import { ModuleWithProviders, NgModule } from '@angular/core';
import { DATA_PROVIDERS, UI_PROVIDERS } from '@architect-poc/settings/data';
import { SettingsUiModule } from './settings-ui.module';


@NgModule({
  exports: [SettingsUiModule],
})
export class SettingsModule {
  static forRoot(): ModuleWithProviders<SettingsModule> {
    return {
      ngModule: SettingsModule,
      providers: [
        ...DATA_PROVIDERS,
        ...UI_PROVIDERS,
      ],
    };
  }
}
