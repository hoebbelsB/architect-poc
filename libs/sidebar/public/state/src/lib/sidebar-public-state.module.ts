import { ModuleWithProviders, NgModule } from '@angular/core';
import { UI_PROVIDERS, DATA_PROVIDERS } from '@architect-poc/sidebar/data';

@NgModule({})
export class SidebarPublicStateModule {
  static forRoot(): ModuleWithProviders<SidebarPublicStateModule> {
    return {
      ngModule: SidebarPublicStateModule,
      providers: [...DATA_PROVIDERS, ...UI_PROVIDERS],
    };
  }
}
