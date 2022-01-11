import { ModuleWithProviders, NgModule } from '@angular/core';
import { DATA_PROVIDERS, UI_PROVIDERS } from '@architect-poc/dashboards/data';

@NgModule({
  imports: [],
})
export class DashboardsPublicStateModule {
  static forRoot(): ModuleWithProviders<DashboardsPublicStateModule> {
    return {
      ngModule: DashboardsPublicStateModule,
      providers: [...DATA_PROVIDERS, ...UI_PROVIDERS],
    };
  }
}
