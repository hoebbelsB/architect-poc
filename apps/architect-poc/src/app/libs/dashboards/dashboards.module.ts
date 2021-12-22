import { ModuleWithProviders, NgModule } from '@angular/core';
import { UI_PROVIDERS, DATA_PROVIDERS } from './data';
import { DashboardsUiModule } from './public/ui';

@NgModule({
  exports: [DashboardsUiModule]
})
export class DashboardsModule {
  static forRoot(): ModuleWithProviders<DashboardsModule> {
    return {
      ngModule: DashboardsModule,
      providers: [
        ...DATA_PROVIDERS,
        ...UI_PROVIDERS,
      ],
    };
  }
}
