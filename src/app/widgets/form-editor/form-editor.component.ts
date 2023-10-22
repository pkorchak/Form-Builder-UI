import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
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
import {
  EditableFormElementComponent,
  FormElementControls
} from '@widgets/form-editor/element/editable-form-element.component';
import { FormsHttpService } from '@services/api/forms-http.service';
import { FormCreateRqDto } from '@model/dto/rq/form-create-rq-dto';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormElement } from '@model/form-elements/abstract-form-element';

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

  form: FormGroup<FormEditorControls>;
  formName: FormControl<string>;
  columnsNum: FormControl<number>;
  columnWidth: string;
  formElements = new FormArray<FormGroup<FormElementControls>>([]);

  private destroyRef = inject(DestroyRef);

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef,
              private formsHttpService: FormsHttpService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.formStructure.name, [Validators.required]],
      columnsNum: this.formStructure.columnsNum,
      elements: this.formElements
    }) as FormGroup<FormEditorControls>;

    this.formName = this.form.get('name') as FormControl<string>;

    this.columnsNum = this.form.get('columnsNum') as FormControl<number>;
    this.columnsNum.valueChanges
      .subscribe(val => this.updateColumnWidth(val));

    this.formStructure.elements.forEach(element => {
      this.formElements.push(this.fb.group({
        label: [element.label, [Validators.required]],
        type: element.type,
        required: element.required,
        placeholder: element.placeholder
      }) as FormGroup<FormElementControls>);
    });
  }

  ngOnChanges(): void {
    this.updateColumnWidth(this.formStructure.columnsNum);
  }

  private updateColumnWidth(newValue: number) {
    this.columnWidth = 100 / newValue + '%';
  }

  addElement(): void {
    this.formElements.push(this.fb.group({
      label: ['New Field', [Validators.required]],
      type: FormElementType.SHORT_TEXT,
      required: false,
      placeholder: ''
    }) as FormGroup<FormElementControls>);

    this.cdr.detectChanges();
    this.elements.last.focusOnLabel();
  }

  deleteElement(index: number): void {
    this.formElements.removeAt(index);
  }

  save(): void {
    this.formsHttpService.create(this.mapFormCreateRqDto())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        // TODO Show notification with save result
      });
  }

  private mapFormCreateRqDto(): FormCreateRqDto {
    return {
      name: this.formName.value,
      columnsNum: this.columnsNum.value,
      elements: [
        ...this.formElements.controls.map(element => this.mapFormElement(element))
      ]
    } as FormCreateRqDto
  }

  private mapFormElement(element: FormGroup<FormElementControls>): FormElement {
    return {
      label: element.get('label')?.value,
      type: element.get('type')?.value,
      required: element.get('required')?.value || undefined,
      placeholder: element.get('placeholder')?.value || undefined,
    } as FormElement;
  }
}

interface FormEditorControls {
  name: FormControl<string>,
  columnsNum: FormControl<number>,
  elements: FormArray<FormGroup<FormElementControls>>,
}
