import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditorComponent } from './form-editor.component';
import { NzButtonModule, NzDatePickerModule, NzIconModule, NzInputModule, NzToolTipModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { EditableLabelComponent } from '@widgets/form-editor/label/editable-label.component';
import { EditableFormElementComponent } from './element/editable-form-element.component';
import { InputMockupComponent } from '@widgets/form-editor/element/mockups/input-mockup.component';
import { DatePickerMockupComponent } from '@widgets/form-editor/element/mockups/date-picker-mockup.component';

const ANT_DESIGN_MODULES = [NzButtonModule, NzInputModule, NzDatePickerModule, NzIconModule, NzToolTipModule];

@NgModule({
  imports: [
    CommonModule,
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
  exports: [FormEditorComponent]
})
export class FormEditorModule {
}
