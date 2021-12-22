import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  UI_PROVIDERS,
  DATA_PROVIDERS,
} from './data';
import { SettingsUiModule } from './ui';

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
