import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormEditorComponent } from './form-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormElementType } from '@model/form-element-type';
import { FormElementsFactory } from '@services/form-elements-factory';
import { EditableLabelComponent } from '@widgets/form-editor/label/editable-label.component';
import { SettingsDrawerComponent } from '@widgets/form-editor/settings-drawer/settings-drawer.component';
import { EditableFormElementComponent } from '@widgets/form-editor/element/editable-form-element.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { MockComponents } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { AbstractFormElement } from '@model/form-elements/abstract-form-element';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormEditorComponent', () => {
  let component: FormEditorComponent;
  let fixture: ComponentFixture<FormEditorComponent>;
  let de: DebugElement;
  let formElementsFactory: FormElementsFactory;
  let elements: AbstractFormElement[];

  const FIRST_ELEMENT_METADATA = {
    label: 'Input',
    type: FormElementType.SHORT_TEXT,
    required: true,
    placeholder: 'Enter text'
  };
  const SECOND_ELEMENT_METADATA = {
    label: 'Checkbox',
    type: FormElementType.CHECKBOX
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormEditorComponent,
        MockComponents(
          EditableLabelComponent,
          EditableFormElementComponent,
          SettingsDrawerComponent)
      ],
      imports: [
        ReactiveFormsModule,
        NzInputNumberModule,
        HttpClientTestingModule
      ]
    })
      .overrideComponent(FormEditorComponent, {
        set: {changeDetection: ChangeDetectionStrategy.Default}
      })
      .compileComponents();

    formElementsFactory = TestBed.inject(FormElementsFactory);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    elements = [
      formElementsFactory.createInstance(FIRST_ELEMENT_METADATA),
      formElementsFactory.createInstance(SECOND_ELEMENT_METADATA)
    ];

    component.formStructure = {
      name: 'Form name',
      columnsNum: 1,
      elements
    };

    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should show form name', () => {
    expect(de.queryAll(By.directive(EditableLabelComponent))[0].componentInstance.parentFormControl.value)
      .toBe('Form name');
  });

  it('should pass all form elements to EditableFormElementComponent instances', () => {
    const formElements = de.queryAll(By.directive(EditableFormElementComponent));
    expect(formElements.length).toBe(2);
    expect(formElements[0].componentInstance.element.value).toEqual(FIRST_ELEMENT_METADATA);
    expect(formElements[1].componentInstance.element.value).toEqual({
      ...SECOND_ELEMENT_METADATA,
      required: null,
      placeholder: null
    });
  });

  it('should be able to add form elements', () => {
    const formElementsBeforeEditing = de.queryAll(By.directive(EditableFormElementComponent));
    expect(formElementsBeforeEditing.length).toBe(2);

    de.query(By.css('.add-element-btn')).nativeElement.click();
    fixture.detectChanges();

    const formElementsAfterEditing = de.queryAll(By.directive(EditableFormElementComponent));
    expect(formElementsAfterEditing.length).toBe(3);
    expect(formElementsAfterEditing[2].componentInstance.element.value).toEqual({
      label: 'New Field',
      type: FormElementType.SHORT_TEXT,
      required: false,
      placeholder: ''
    });
  });

  it('should be able to delete form elements', () => {
    const formElementsBeforeEditing = de.queryAll(By.directive(EditableFormElementComponent));
    expect(formElementsBeforeEditing.length).toBe(2);

    // Delete the first form element
    formElementsBeforeEditing[0].componentInstance.deleteElement.emit();
    fixture.detectChanges();

    const formElementsAfterFirstEditing = de.queryAll(By.directive(EditableFormElementComponent));
    expect(formElementsAfterFirstEditing.length).toBe(1);
    expect(formElementsAfterFirstEditing[0].componentInstance.element.value).toEqual({
      ...SECOND_ELEMENT_METADATA,
      required: null,
      placeholder: null
    });

    // Delete the second form element
    formElementsBeforeEditing[1].componentInstance.deleteElement.emit();
    fixture.detectChanges();

    expect(de.queryAll(By.directive(EditableFormElementComponent)).length).toBe(0);
  });

  it('should be able to change columns number', () => {
    verifyColumnWidthIs('100%');

    component.form.get('columnsNum')?.setValue(5);
    fixture.detectChanges();
    verifyColumnWidthIs('20%');
  });

  [
    {columnsNum: 1, columnWidth: '100%'},
    {columnsNum: 2, columnWidth: '50%'},
    {columnsNum: 3, columnWidth: '33.3333%'},
    {columnsNum: 4, columnWidth: '25%'},
  ].forEach(testData =>
    it('column width should be ' + testData.columnWidth + ' for columnsNum ' + testData.columnsNum, () => {
      component.form.get('columnsNum')?.setValue(testData.columnsNum);
      fixture.detectChanges();
      verifyColumnWidthIs(testData.columnWidth);
    }));


  function verifyColumnWidthIs(columnWidth: string) {
    const controlContainers = de.queryAll(By.css('.control-container'));
    expect(controlContainers[0].styles.width).toBe(columnWidth);
    expect(controlContainers[1].styles.width).toBe(columnWidth);
  }
});
