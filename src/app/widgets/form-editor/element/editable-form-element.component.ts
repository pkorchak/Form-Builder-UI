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

  @ViewChild(EditableLabelComponent) editableLabel: EditableLabelComponent;

  required: boolean;
  placeholderFormControl: FormControl;
  labelFormControl: FormControl;
  typeFormControl: FormControl;

  ngOnChanges(): void {
    this.placeholderFormControl = this.element.get('placeholder') as FormControl;
    this.labelFormControl = this.element.get('label') as FormControl;
    this.typeFormControl = this.element.get('type') as FormControl;
    this.required = this.element.get('required')?.value;
  }

  updateRequired() {
    this.required = !this.required;
    this.element.patchValue({required: this.required});
  }

  public focusOnLabel() {
    this.editableLabel.focusOnInput();
  }
}
