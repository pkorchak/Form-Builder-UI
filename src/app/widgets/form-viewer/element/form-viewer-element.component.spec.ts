import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViewerElementComponent } from './form-viewer-element.component';

describe('FormViewerElementComponent', () => {
  let component: FormViewerElementComponent;
  let fixture: ComponentFixture<FormViewerElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormViewerElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormViewerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
