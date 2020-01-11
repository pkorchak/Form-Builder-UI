import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditorComponent } from './form-editor.component';
import { NzButtonModule, NzDatePickerModule, NzIconModule, NzInputModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { FormElementsFactory } from '@services/form-elements-factory';
import { EditableLabelComponent } from '@widgets/form-editor/label/editable-label.component';
import { EditableFormElementComponent } from './element/editable-form-element.component';
import { InputMockupComponent } from '@widgets/form-editor/element/mockups/input-mockup.component';
import { DatePickerMockupComponent } from '@widgets/form-editor/element/mockups/date-picker-mockup.component';

const ANT_DESIGN_MODULES = [NzButtonModule, NzInputModule, NzDatePickerModule, NzIconModule];

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
  providers: [FormElementsFactory],
  exports: [FormEditorComponent]
})
export class FormEditorModule {
}
