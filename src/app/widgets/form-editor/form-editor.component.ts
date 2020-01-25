import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import { FormStructure } from '@model/form-structure';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormElementType } from '@model/form-element-type';
import { EditableFormElementComponent } from '@widgets/form-editor/element/editable-form-element.component';

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

  @ViewChildren(EditableFormElementComponent) elements: QueryList<EditableFormElementComponent>;

  form: FormGroup;
  formElements = new FormArray([]);
  formName: FormControl;
  columnsNum: FormControl;
  columnWidth: string;

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.formStructure.name, [Validators.required]],
      columnsNum: this.formStructure.columnsNum,
      elements: this.formElements
    });

    this.formName = this.form.get('name') as FormControl;

    this.columnsNum = this.form.get('columnsNum') as FormControl;
    this.columnsNum.valueChanges
      .subscribe(val => this.updateColumnWidth(val));

    this.formStructure.elements.forEach(element => {
      element.initFormControl();
      this.formElements.push(this.fb.group({
        label: [element.label, [Validators.required]],
        type: element.type,
        required: element.required,
        placeholder: element.placeholder
      }));
    });
  }

  ngOnChanges(): void {
    this.updateColumnWidth(this.formStructure.columnsNum);
  }

  private updateColumnWidth(newValue: number) {
    this.columnWidth = 100 / newValue + '%';
  }

  addElement() {
    this.formElements.push(this.fb.group({
      label: ['New Field', [Validators.required]],
      type: FormElementType.INPUT,
      required: false,
      placeholder: ''
    }));

    this.cdr.detectChanges();
    this.elements.last.focusOnLabel();
  }

  deleteElement(index: number) {
    this.formElements.removeAt(index);
  }
}
