import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardsComponent } from './components/dashboards.component';

@NgModule({
  declarations: [DashboardsComponent],
  imports: [CommonModule],
  exports: [DashboardsComponent]
})
export class DashboardsUiModule {
}
