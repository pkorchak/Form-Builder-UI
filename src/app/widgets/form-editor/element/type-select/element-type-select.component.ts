import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormElementType } from '@model/form-element-type';

@Component({
  selector: 'app-element-type-select',
  templateUrl: './element-type-select.component.html',
  styleUrls: ['./element-type-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementTypeSelectComponent {

  @Input() type: FormControl<FormElementType>;

  options = [
    {
      value: FormElementType.SHORT_TEXT,
      label: 'Short text'
    },
    {
      value: FormElementType.LONG_TEXT,
      label: 'Long text'
    },
    {
      value: FormElementType.DATE,
      label: 'Date'
    },
    {
      value: FormElementType.NUMBER,
      label: 'Number'
    },
    {
      value: FormElementType.CHECKBOX,
      label: 'Checkbox'
    },
    {
      value: FormElementType.EMAIL,
      label: 'Email'
    },
    {
      value: FormElementType.PASSWORD,
      label: 'Password'
    }
  ];
}
