import { NgModule } from '@angular/core';
import { ButtonComponentModule } from '../../../design-system/public/ui/index';
import { SettingsComponent } from './container/settings/settings.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [SettingsComponent],
  imports: [CommonModule, ButtonComponentModule],
  declarations: [SettingsComponent],
})
export class SettingsUiModule {}
