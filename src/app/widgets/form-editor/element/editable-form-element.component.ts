import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editable-form-element',
  templateUrl: './editable-form-element.component.html',
  styleUrls: ['./editable-form-element.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableFormElementComponent implements OnChanges {

  @Input() element: FormGroup;

  @Output() deleteElement = new EventEmitter();

  placeholder: string;
  required: boolean;
  type: string;
  labelFormControl: FormControl;

  ngOnChanges(): void {
    const placeholderFormControl = this.element.get('placeholder');
    const requiredFormControl = this.element.get('required');
    const typeFormControl = this.element.get('type');
    this.placeholder = placeholderFormControl && placeholderFormControl.value;
    this.required = requiredFormControl && requiredFormControl.value;
    this.type = typeFormControl && typeFormControl.value;
    this.labelFormControl = this.element.get('label') as FormControl;
  }
}
