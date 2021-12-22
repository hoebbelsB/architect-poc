import { ModuleWithProviders, NgModule } from '@angular/core';
import { APPLICATION_PROVIDERS, INFRASTRUCTURE_PROVIDERS } from './infrastructure';
import { DashboardsUiModule } from './ui';

@NgModule({
  exports: [DashboardsUiModule]
})
export class DashboardsModule {
  static forRoot(): ModuleWithProviders<DashboardsModule> {
    return {
      ngModule: DashboardsModule,
      providers: [
        ...INFRASTRUCTURE_PROVIDERS,
        ...APPLICATION_PROVIDERS,
      ],
    };
  }
}
