import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormViewerComponent } from './form-viewer.component';
import { FormElementComponent } from './element/form-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule, NzCheckboxModule, NzDatePickerModule, NzInputModule } from 'ng-zorro-antd';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { InputFormElementComponent } from './element/input/input-form-element.component';
import { DatePickerFormElementComponent } from './element/date-picker/date-picker-form-element.component';
import { CheckboxFormElementComponent } from './element/checkbox/checkbox-form-element.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzDatePickerModule,
    PerfectScrollbarModule
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
