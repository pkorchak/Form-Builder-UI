import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditorComponent } from './form-editor.component';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzIconModule,
  NzInputModule,
  NzInputNumberModule,
  NzSelectModule,
  NzToolTipModule
} from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { EditableLabelComponent } from './label/editable-label.component';
import { EditableFormElementComponent } from './element/editable-form-element.component';
import { InputMockupComponent } from './element/mockups/input/input-mockup.component';
import { ElementTypeSelectComponent } from './element/type-select/element-type-select.component';
import { CheckboxMockupComponent } from './element/mockups/checkbox/checkbox-mockup.component';
import { SettingsDrawerComponent } from './settings-drawer/settings-drawer.component';
import { TextareaMockupComponent } from './element/mockups/textarea/textarea-mockup.component';
import { FormContainerModule } from '@widgets/form-container/form-container.module';

const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzIconModule,
  NzInputModule,
  NzInputNumberModule,
  NzSelectModule,
  NzToolTipModule
];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN_MODULES,
    ReactiveFormsModule,
    FormContainerModule
  ],
  declarations: [
    FormEditorComponent,
    EditableLabelComponent,
    EditableFormElementComponent,
    InputMockupComponent,
    CheckboxMockupComponent,
    TextareaMockupComponent,
    ElementTypeSelectComponent,
    SettingsDrawerComponent
  ],
  exports: [FormEditorComponent]
})
export class FormEditorModule {
}
