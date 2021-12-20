import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <h2>Sidebar Component</h2>
    <app-settings></app-settings>
    <app-spaces></app-spaces>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
