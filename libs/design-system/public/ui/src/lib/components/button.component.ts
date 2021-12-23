import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'button-component',
  template: `<div>I'm a button</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

const exports = [ButtonComponent];

@NgModule({
  declarations: exports,
  exports,
})
export class ButtonComponentModule {}
