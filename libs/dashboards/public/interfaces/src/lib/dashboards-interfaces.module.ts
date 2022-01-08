import { ModuleWithProviders, NgModule } from '@angular/core';
import { DATA_PROVIDERS, UI_PROVIDERS } from '@architect-poc/dashboards/data';

@NgModule({
  imports: [],
})
export class DashboardsInterfacesModule {
  static forRoot(): ModuleWithProviders<DashboardsInterfacesModule> {
    return {
      ngModule: DashboardsInterfacesModule,
      providers: [...DATA_PROVIDERS, ...UI_PROVIDERS],
    };
  }
}
