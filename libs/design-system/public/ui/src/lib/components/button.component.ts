import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'ds-button-component',
  template: `<div>I'm a button</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {}

const exports = [ButtonComponent];

@NgModule({
  declarations: exports,
  exports
})
export class ButtonComponentModule {}
