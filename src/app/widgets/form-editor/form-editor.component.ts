import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormStructure } from '@model/form-structure';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: [
    './form-editor.component.less',
    '../../styles/modules/_form-block.less',
    '../../styles/modules/_buttons.less'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEditorComponent implements OnInit, OnChanges {

  @Input() formStructure: FormStructure;

  @Output() showFormPreviewClick = new EventEmitter();

  columnWidth: string;
  form: FormGroup;
  formElements = new FormArray([]);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.formStructure.name, [Validators.required]],
      columnsNum: this.formStructure.columnsNum,
      elements: this.formElements
    });

    this.formStructure.elements.forEach(element => {
      element.initFormControl();
      this.formElements.push(this.fb.group({
        label: [element.label, [Validators.required]],
        type: element.type
      }));
    });
  }

  ngOnChanges(): void {
    this.columnWidth = 100 / this.formStructure.columnsNum + '%';
  }

}
