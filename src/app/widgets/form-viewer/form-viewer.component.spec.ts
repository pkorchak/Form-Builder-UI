import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormViewerComponent } from './form-viewer.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MockComponents } from 'ng-mocks';
import { FormElementComponent } from '@widgets/form-viewer/element/form-element.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormElementType } from '@model/form-element-type';
import { FormElementsFactory } from '@services/form-elements-factory';
import { AbstractFormElement } from '@model/form-elements/abstract-form-element';

describe('FormViewerComponent', () => {
  let component: FormViewerComponent;
  let fixture: ComponentFixture<FormViewerComponent>;
  let de: DebugElement;
  let formElementsFactory: FormElementsFactory;
  let elements: AbstractFormElement[];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormViewerComponent,
        MockComponents(FormElementComponent)
      ],
      imports: [
        ReactiveFormsModule,
        NzButtonModule
      ]
    }).compileComponents();

    formElementsFactory = TestBed.inject(FormElementsFactory);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormViewerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    elements = [
      formElementsFactory.createInstance({
        label: 'Input',
        type: FormElementType.SHORT_TEXT
      }),
      formElementsFactory.createInstance({
        label: 'Checkbox',
        type: FormElementType.CHECKBOX
      })
    ];
    component.formStructure = {
      name: 'Form name',
      columnsNum: 1,
      elements
    };
  });

  it('should show form name', () => {
    fixture.detectChanges();
    expect(de.query(By.css('.form-name')).nativeElement.innerText).toBe('Form name');
  });

  it('should pass all elements to FormElementComponent instances', () => {
    fixture.detectChanges();

    const formElements = de.queryAll(By.directive(FormElementComponent));
    expect(formElements.length).toBe(2);
    expect(formElements[0].componentInstance.element).toBe(elements[0]);
    expect(formElements[1].componentInstance.element).toBe(elements[1]);
  });

  [
    {columnsNum: 1, columnWidth: '100%'},
    {columnsNum: 2, columnWidth: '50%'},
    {columnsNum: 3, columnWidth: '33.3333%'},
    {columnsNum: 4, columnWidth: '25%'},
  ].forEach(testData =>
    it('column width should be ' + testData.columnWidth + ' for columnsNum ' + testData.columnsNum, () => {
      component.formStructure.columnsNum = testData.columnsNum;
      component.ngOnChanges();
      fixture.detectChanges();

      de.queryAll(By.css('.control-container'))
        .forEach(controlContainer => expect(controlContainer.styles.width).toBe(testData.columnWidth));
    }));
});
