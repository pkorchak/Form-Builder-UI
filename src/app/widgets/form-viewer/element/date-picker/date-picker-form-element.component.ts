import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePickerFormElement } from '@model/form-elements/date-picker-form-element';

@Component({
  selector: 'app-date-picker-form-element',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<nz-date-picker [formControl]="element.formControl"
                             [nzPlaceHolder]="element.placeholder || ''">
  </nz-date-picker>`
})
export class DatePickerFormElementComponent {

  @Input() element: DatePickerFormElement;

}
