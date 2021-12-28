import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpacesComponent } from './container/spaces/spaces.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [SpacesComponent],
  imports: [CommonModule, RouterModule],
  declarations: [SpacesComponent],
})
export class SpacesUiModule {}
