import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({})
export class SidebarPublicStateModule {
  static forRoot(): ModuleWithProviders<SidebarPublicStateModule> {
    return {
      ngModule: SidebarPublicStateModule,
      providers: [],
    };
  }
}
