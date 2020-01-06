import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditorComponent } from './form-editor.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

const ANT_DESIGN_MODULES = [];

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [
    FormEditorComponent
  ],
  exports: [FormEditorComponent]
})
export class FormEditorModule {
}
