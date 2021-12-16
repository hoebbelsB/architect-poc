import { NgModule } from '@angular/core';
import { FeatureOneComponent } from './components/feature-one.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [FeatureOneComponent],
  imports: [CommonModule],
  declarations: [FeatureOneComponent],
})
export class UiModule {}
