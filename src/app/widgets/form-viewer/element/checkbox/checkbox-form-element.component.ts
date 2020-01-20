import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CheckboxFormElement } from '@model/form-elements/checkbox-form-element';

@Component({
  selector: 'app-checkbox-form-element',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<label nz-checkbox
                    style="margin-bottom: 6px; font-size: 13.5px"
                    [formControl]="element.formControl">{{element.label}}
  </label>`
})
export class CheckboxFormElementComponent {

  @Input() element: CheckboxFormElement;

}
