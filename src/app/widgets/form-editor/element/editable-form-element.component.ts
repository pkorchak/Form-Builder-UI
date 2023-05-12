import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditableLabelComponent } from '@widgets/form-editor/label/editable-label.component';
import { FormElementType } from '@model/form-element-type';

@Component({
  selector: 'app-editable-form-element',
  templateUrl: './editable-form-element.component.html',
  styleUrls: ['./editable-form-element.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableFormElementComponent implements OnChanges {

  @Input() element: FormGroup<FormElementControls>;

  @Output() deleteElement = new EventEmitter();

  @ViewChild(EditableLabelComponent) editableLabel: EditableLabelComponent;

  placeholderFormControl: FormControl<string>;
  labelFormControl: FormControl<string>;
  typeFormControl: FormControl<FormElementType>;
  required: boolean;

  ngOnChanges(): void {
    this.placeholderFormControl = this.element.get('placeholder') as FormControl<string>;
    this.labelFormControl = this.element.get('label') as FormControl<string>;
    this.typeFormControl = this.element.get('type') as FormControl<FormElementType>;
    this.required = this.element.get('required')?.value as boolean;
  }

  updateRequired(): void {
    this.required = !this.required;
    this.element.patchValue({required: this.required});
  }

  public focusOnLabel(): void {
    this.editableLabel.focusOnInput();
  }
}

export interface FormElementControls {
  label: FormControl<string>;
  type: FormControl<FormElementType>;
  required: FormControl<boolean | null>;
  placeholder: FormControl<string | null>;
}
