import { NgModule } from '@angular/core';
import { SpacesComponent } from './spaces/spaces.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [SpacesComponent],
  imports: [CommonModule],
  declarations: [SpacesComponent],
})
export class SpacesUiModule {}
