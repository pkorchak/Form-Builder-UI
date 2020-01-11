import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputFormElement } from '@model/form-elements/input-form-element';

@Component({
  selector: 'app-input-mockup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<input nz-input
                    disabled="true"
                    [type]="element.inputType"
                    [placeholder]="element.placeholder || ''">`
})
export class InputMockupComponent {

  @Input() element: InputFormElement;

}
