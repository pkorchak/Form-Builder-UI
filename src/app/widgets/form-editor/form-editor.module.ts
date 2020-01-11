import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditorComponent } from './form-editor.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormViewerModule } from '@widgets/form-viewer';
import { NzButtonModule, NzInputModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { FormElementsFactory } from '@services/form-elements-factory';
import { EditableLabelComponent } from '@widgets/form-editor/editable-label/editable-label.component';

const ANT_DESIGN_MODULES = [NzButtonModule, NzInputModule];

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    ANT_DESIGN_MODULES,
    ReactiveFormsModule,
    FormViewerModule // TODO Not import that module here
  ],
  declarations: [
    FormEditorComponent,
    EditableLabelComponent
  ],
  providers: [FormElementsFactory],
  exports: [FormEditorComponent]
})
export class FormEditorModule {
}
