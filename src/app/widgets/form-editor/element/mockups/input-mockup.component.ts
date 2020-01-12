import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-mockup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<input nz-input
                    disabled="true"
                    [placeholder]="placeholder || ''">`
})
export class InputMockupComponent {

  @Input() placeholder: string;

}
