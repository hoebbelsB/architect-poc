import { NgModule } from '@angular/core';
import { SpacesComponent } from './components/spaces.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [SpacesComponent],
  imports: [CommonModule],
  declarations: [SpacesComponent],
})
export class UiModule {}
