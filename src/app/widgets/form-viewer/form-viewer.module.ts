import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormViewerComponent } from './form-viewer.component';
import { FormElementComponent } from './element/form-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule, NzCheckboxModule, NzDatePickerModule, NzInputModule } from 'ng-zorro-antd';
import { InputFormElementComponent } from './element/input/input-form-element.component';
import { DatePickerFormElementComponent } from './element/date-picker/date-picker-form-element.component';
import { CheckboxFormElementComponent } from './element/checkbox/checkbox-form-element.component';

const ANT_DESIGN_MODULES = [
  NzInputModule,
  NzButtonModule,
  NzCheckboxModule,
  NzDatePickerModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [
    FormViewerComponent,
    FormElementComponent,
    InputFormElementComponent,
    CheckboxFormElementComponent,
    DatePickerFormElementComponent
  ],
  exports: [FormViewerComponent]
})
export class FormViewerModule {
}
