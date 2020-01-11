import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormStructure } from '@model/form-structure';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.less', '../../styles/modules/_form-block.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEditorComponent implements OnInit, OnChanges {

  @Input() formStructure: FormStructure;

  columnWidth: string;
  form: FormGroup;
  formElements = new FormArray([]);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.formStructure.name,
      columnsNum: this.formStructure.columnsNum,
      elements: this.formElements
    });

    this.formStructure.elements.forEach(element => {
      element.initFormControl();
      this.formElements.push(this.fb.group({
        label: element.label,
        type: element.type
      }));
    });
  }

  ngOnChanges(): void {
    this.columnWidth = 100 / this.formStructure.columnsNum + '%';
  }

  logForm() {
    console.log(this.form);
  }

}
