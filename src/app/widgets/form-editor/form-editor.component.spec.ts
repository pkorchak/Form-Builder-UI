import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorComponent } from './form-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormElementType } from '@model/form-element-type';
import { FormElementsFactory } from '@services/form-elements-factory';
import { EditableLabelComponent } from '@widgets/form-editor/label/editable-label.component';
import { SettingsDrawerComponent } from '@widgets/form-editor/settings-drawer/settings-drawer.component';
import { EditableFormElementComponent } from '@widgets/form-editor/element/editable-form-element.component';
import { NzInputNumberModule } from 'ng-zorro-antd';
import { MockComponents } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('FormEditorComponent', () => {
  let component: FormEditorComponent;
  let fixture: ComponentFixture<FormEditorComponent>;
  let root: DebugElement;
  let formElementsFactory: FormElementsFactory;

  beforeEach(async(() => {
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
        NzInputNumberModule
      ]
    }).compileComponents();

    formElementsFactory = TestBed.inject(FormElementsFactory);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorComponent);
    component = fixture.componentInstance;
    root = fixture.debugElement;

    component.formStructure = {
      name: 'Form name',
      columnsNum: 1,
      elements: []
    };
  });

  it('should show form name', () => {
    fixture.detectChanges();

    expect(root.queryAll(By.directive(EditableLabelComponent))[0].componentInstance.parentFormControl.value)
      .toBe('Form name');
  });

  [
    {columnsNum: 1, columnWidth: '100%'},
    {columnsNum: 2, columnWidth: '50%'},
    {columnsNum: 3, columnWidth: '33.3333%'},
    {columnsNum: 4, columnWidth: '25%'},
  ].forEach(testData =>
    it('column width should be ' + testData.columnWidth + ' for columnsNum ' + testData.columnsNum, () => {
      component.formStructure.columnsNum = testData.columnsNum;
      component.formStructure.elements = [
        formElementsFactory.createInstance({
          label: 'Input 1',
          type: FormElementType.SHORT_TEXT
        }),
        formElementsFactory.createInstance({
          label: 'Input 2',
          type: FormElementType.SHORT_TEXT
        })
      ];
      component.ngOnChanges();
      fixture.detectChanges();

      const controlContainers = root.queryAll(By.css('.control-container'));
      expect(controlContainers[0].styles.width).toBe(testData.columnWidth);
      expect(controlContainers[1].styles.width).toBe(testData.columnWidth);
    }));

});
