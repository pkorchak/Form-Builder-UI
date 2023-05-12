import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-mockup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../editable-placeholder.less'],
  template: `<input nz-input [formControl]="placeholderFormControl">`
})
export class InputMockupComponent {

  @Input() placeholderFormControl: FormControl<string | null>;

}
