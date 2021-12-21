import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  APPLICATION_PROVIDERS,
  INFRASTRUCTURE_PROVIDERS,
} from './infrastructure';
import { SettingsUiModule } from './ui';

@NgModule({
  exports: [SettingsUiModule],
})
export class SettingsModule {
  static forRoot(): ModuleWithProviders<SettingsModule> {
    return {
      ngModule: SettingsModule,
      providers: [
        ...INFRASTRUCTURE_PROVIDERS,
        ...APPLICATION_PROVIDERS,
      ],
    };
  }
}
