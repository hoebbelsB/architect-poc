import { NgModule } from '@angular/core';
import { SettingsComponent } from './components/settings.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [SettingsComponent],
  imports: [CommonModule],
  declarations: [SettingsComponent],
})
export class UiModule {}
