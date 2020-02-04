import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormViewerComponent } from './form-viewer.component';
import { FormElementComponent } from './element/form-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule, NzCheckboxModule, NzDatePickerModule, NzInputModule } from 'ng-zorro-antd';
import { InputFormElementComponent } from './element/input/input-form-element.component';
import { DateFormElementComponent } from './element/date/date-form-element.component';
import { CheckboxFormElementComponent } from './element/checkbox/checkbox-form-element.component';
import { FormContainerModule } from '@widgets/form-container/form-container.module';
import { TextareaFormElementComponent } from '@widgets/form-viewer/element/textarea/textarea-form-element.component';

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
    ANT_DESIGN_MODULES,
    FormContainerModule
  ],
  declarations: [
    FormViewerComponent,
    FormElementComponent,
    InputFormElementComponent,
    CheckboxFormElementComponent,
    TextareaFormElementComponent,
    DateFormElementComponent
  ],
  exports: [FormViewerComponent]
})
export class FormViewerModule {
}
