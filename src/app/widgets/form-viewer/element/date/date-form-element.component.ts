import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DateFormElement } from '@model/form-elements/date-form-element';

@Component({
  selector: 'app-date-form-element',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<nz-date-picker [formControl]="element.formControl"
                             [nzPlaceHolder]="element.placeholder || ''">
  </nz-date-picker>`
})
export class DateFormElementComponent {

  @Input() element: DateFormElement;

}
