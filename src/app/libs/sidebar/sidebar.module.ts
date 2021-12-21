import { ModuleWithProviders, NgModule } from '@angular/core';
import { APPLICATION_PROVIDERS, INFRASTRUCTURE_PROVIDERS } from './infrastructure';
import { SidebarUiModule } from './ui/sidebar-ui.module';

@NgModule({
  imports: [SidebarUiModule],
  exports: [SidebarUiModule],
  providers: [],
})
export class SidebarModule {

  static forRoot(): ModuleWithProviders<SidebarModule> {
    return {
      ngModule: SidebarModule,
      providers: [
        ...INFRASTRUCTURE_PROVIDERS,
        ...APPLICATION_PROVIDERS,
      ],
    };
  }
}
