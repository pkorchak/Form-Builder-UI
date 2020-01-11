import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditorComponent } from './form-editor.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NzButtonModule, NzDatePickerModule, NzInputModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { FormElementsFactory } from '@services/form-elements-factory';
import { EditableLabelComponent } from '@widgets/form-editor/label/editable-label.component';
import { EditableFormElementComponent } from './element/editable-form-element.component';
import { InputMockupComponent } from '@widgets/form-editor/element/mockups/input-mockup.component';
import { DatePickerMockupComponent } from '@widgets/form-editor/element/mockups/date-picker-mockup.component';

const ANT_DESIGN_MODULES = [NzButtonModule, NzInputModule, NzDatePickerModule];

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    ANT_DESIGN_MODULES,
    ReactiveFormsModule
  ],
  declarations: [
    FormEditorComponent,
    EditableLabelComponent,
    EditableFormElementComponent,
    InputMockupComponent,
    DatePickerMockupComponent
  ],
  providers: [FormElementsFactory],
  exports: [FormEditorComponent]
})
export class FormEditorModule {
}
