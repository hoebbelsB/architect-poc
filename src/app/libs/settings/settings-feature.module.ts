import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  APPLICATION_PROVIDERS,
  INFRASTRUCTURE_PROVIDERS,
} from './infrastructure';
import { UiModule, UI_PROVIDERS } from './ui';

@NgModule({
  exports: [UiModule],
})
export class SettingsFeatureModule {
  static forRoot(): ModuleWithProviders<SettingsFeatureModule> {
    return {
      ngModule: SettingsFeatureModule,
      providers: [
        ...INFRASTRUCTURE_PROVIDERS,
        ...APPLICATION_PROVIDERS,
        ...UI_PROVIDERS,
      ],
    };
  }
}
