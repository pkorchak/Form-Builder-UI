import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePickerFormElement } from '@model/form-elements/date-picker-form-element';

@Component({
  selector: 'app-date-picker-mockup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<nz-date-picker nzDisabled="true"
                             [nzPlaceHolder]="element.placeholder || ''">
  </nz-date-picker>`
})
export class DatePickerMockupComponent {

  @Input() element: DatePickerFormElement;

}
