import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractFormElement } from '@model/form-elements/abstract-form-element';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editable-form-element',
  templateUrl: './editable-form-element.component.html',
  styleUrls: ['./editable-form-element.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableFormElementComponent {

  @Input() element: AbstractFormElement;
  @Input() elementFormGroup: FormGroup;

  getFormControl(name: string): FormControl {
    return this.elementFormGroup.get(name) as FormControl;
  }
}
