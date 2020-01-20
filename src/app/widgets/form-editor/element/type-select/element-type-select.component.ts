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

  @Input() type: FormControl;

  options = [
    {
      value: FormElementType.INPUT,
      label: 'Input'
    },
    {
      value: FormElementType.DATE_PICKER,
      label: 'Date'
    },
    {
      value: FormElementType.CHECKBOX,
      label: 'Checkbox'
    }
  ];
}
