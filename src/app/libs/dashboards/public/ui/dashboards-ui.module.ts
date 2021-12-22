import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardsComponent } from './container/dashboards/dashboards.component';

@NgModule({
  declarations: [DashboardsComponent],
  imports: [CommonModule],
  exports: [DashboardsComponent]
})
export class DashboardsUiModule {
}
