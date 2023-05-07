import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditorComponent } from './form-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditableLabelComponent } from './label/editable-label.component';
import { EditableFormElementComponent } from './element/editable-form-element.component';
import { InputMockupComponent } from './element/mockups/input/input-mockup.component';
import { ElementTypeSelectComponent } from './element/type-select/element-type-select.component';
import { CheckboxMockupComponent } from './element/mockups/checkbox/checkbox-mockup.component';
import { SettingsDrawerComponent } from './settings-drawer/settings-drawer.component';
import { TextareaMockupComponent } from './element/mockups/textarea/textarea-mockup.component';
import { FormContainerModule } from '@widgets/form-container/form-container.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

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
