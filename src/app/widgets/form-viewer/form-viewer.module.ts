import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormViewerComponent } from './form-viewer.component';
import { FormViewerElementComponent } from './element/form-viewer-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule, NzCheckboxModule, NzInputModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule
  ],
  declarations: [FormViewerComponent, FormViewerElementComponent],
  exports: [FormViewerComponent]
})
export class FormViewerModule {
}
