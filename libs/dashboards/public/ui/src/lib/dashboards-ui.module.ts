import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardsComponent } from './container/dashboards/dashboards.component';

@NgModule({
  declarations: [DashboardsComponent],
  imports: [CommonModule, RouterModule],
  exports: [DashboardsComponent],
})
export class DashboardsUiModule {}
