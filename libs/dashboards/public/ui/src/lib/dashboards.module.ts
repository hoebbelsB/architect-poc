import { ModuleWithProviders, NgModule } from '@angular/core';
import { DATA_PROVIDERS, UI_PROVIDERS } from '@architect-poc/dashboards/data';
import { DashboardsUiModule } from './index';

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
