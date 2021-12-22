import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarUiPort } from '../../use-cases';

@Component({
  selector: 'app-sidebar',
  template: `
    <h2>Sidebar Component</h2>
    <button (click)="showSettings()">Toggle sidebar settings</button>
    <app-settings></app-settings>
    <app-spaces></app-spaces>
    <app-dashboards></app-dashboards>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  constructor(
    private sidebarUseCase: SidebarUiPort
  ) { }

  showSettings() {
    this.sidebarUseCase.showSettings();
  }
}
