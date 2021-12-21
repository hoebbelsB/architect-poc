import { NgModule } from '@angular/core';
import { UiModule } from '../../settings/ui/index';
import { SpacesModule } from '../../spaces/spaces.module';

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    UiModule,
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
