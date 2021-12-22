import { NgModule } from '@angular/core';
import { SettingsUiModule } from '../../settings/ui';
import { SpacesModule } from '../../spaces/spaces.module';

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    SettingsUiModule,
    SpacesModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [SidebarComponent],
  providers: [

  ],
})
export class SidebarUiModule {}
