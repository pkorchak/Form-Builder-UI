import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditableLabelComponent } from '@widgets/form-editor/label/editable-label.component';

@Component({
  selector: 'app-editable-form-element',
  templateUrl: './editable-form-element.component.html',
  styleUrls: ['./editable-form-element.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableFormElementComponent implements OnChanges {

  @Input() element: FormGroup;

  @Output() deleteElement = new EventEmitter();

  @ViewChild(EditableLabelComponent, {static: false}) editableLabel: EditableLabelComponent;

  placeholder: string;
  required: boolean;
  labelFormControl: FormControl;
  typeFormControl: FormControl;

  ngOnChanges(): void {
    const placeholderFormControl = this.element.get('placeholder');
    const requiredFormControl = this.element.get('required');
    this.labelFormControl = this.element.get('label') as FormControl;
    this.typeFormControl = this.element.get('type') as FormControl;
    this.placeholder = placeholderFormControl && placeholderFormControl.value;
    this.required = requiredFormControl && requiredFormControl.value;
  }

  updateRequired() {
    this.required = !this.required;
    this.element.patchValue({required: this.required});
  }

  public focusOnLabel() {
    this.editableLabel.focusOnInput();
  }
}
