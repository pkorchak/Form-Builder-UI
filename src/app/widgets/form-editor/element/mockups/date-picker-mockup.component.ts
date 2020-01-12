import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker-mockup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<nz-date-picker nzDisabled="true"
                             [nzPlaceHolder]="placeholder || ''">
  </nz-date-picker>`
})
export class DatePickerMockupComponent {

  @Input() placeholder: string;

}
