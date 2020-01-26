import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputFormElement } from '@model/form-elements/input-form-element';

@Component({
  selector: 'app-input-form-element',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<input nz-input
                    [type]="element.type"
                    [formControl]="element.formControl"
                    [placeholder]="element.placeholder || ''">`
})
export class InputFormElementComponent {

  @Input() element: InputFormElement;

}
