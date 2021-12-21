import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShowSettingsUiPort } from '../../use-cases';

@Component({
  selector: 'app-sidebar',
  template: `
    <h2>Sidebar Component</h2>
    <button (click)="showSettings()">Toggle sidebar settings</button>
    <app-settings></app-settings>
    <app-spaces></app-spaces>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  constructor(
    private showSettingsUseCase: ShowSettingsUiPort
  ) { }

  showSettings() {
    this.showSettingsUseCase.showSettings();
  }
}
