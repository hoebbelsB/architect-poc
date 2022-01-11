import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [],
})
export class DashboardsPublicStateModule {
  static forRoot(): ModuleWithProviders<DashboardsPublicStateModule> {
    return {
      ngModule: DashboardsPublicStateModule,
      providers: [],
    };
  }
}
