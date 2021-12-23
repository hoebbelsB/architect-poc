import { ModuleWithProviders, NgModule } from '@angular/core';
import { UI_PROVIDERS, DATA_PROVIDERS } from '@architect-poc/sidebar/data';
import { SidebarUiModule } from './sidebar-ui.module';

@NgModule({
  imports: [SidebarUiModule],
  exports: [SidebarUiModule],
  providers: [],
})
export class SidebarModule {
  static forRoot(): ModuleWithProviders<SidebarModule> {
    return {
      ngModule: SidebarModule,
      providers: [...DATA_PROVIDERS, ...UI_PROVIDERS],
    };
  }
}
