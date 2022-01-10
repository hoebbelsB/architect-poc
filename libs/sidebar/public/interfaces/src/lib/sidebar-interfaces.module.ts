import { ModuleWithProviders, NgModule } from '@angular/core';
import { UI_PROVIDERS, DATA_PROVIDERS } from '@architect-poc/sidebar/data';

@NgModule({})
export class SidebarInterfacesModule {
  static forRoot(): ModuleWithProviders<SidebarInterfacesModule> {
    return {
      ngModule: SidebarInterfacesModule,
      providers: [...DATA_PROVIDERS, ...UI_PROVIDERS],
    };
  }
}
